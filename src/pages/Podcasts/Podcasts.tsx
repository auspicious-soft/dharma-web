import FooterPageHeroSection from "@/components/ReusableComponents/FooterPageHeroSection/FooterPageHeroSection";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";
import { CALENDLY_CONSULTATION_URL } from "@/utils/links";
import { Button } from "@/components/ui/button";
import { CalendarDays, Headphones, ListVideo, Play, RefreshCcw } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const podcastChannelUrl = "https://bit.ly/DharamYT";
const youtubeApiKey = import.meta.env.VITE_PODCAST_YOUTUBE_API_KEY as
  | string
  | undefined;
const podcastChannelId = import.meta.env.VITE_PODCAST_YOUTUBE_CHANNEL_ID as
  | string
  | undefined;
const podcastPlaylistFetchLimit = 1;
const podcastVideosPerPlaylistLimit = 1;

type YouTubeThumbnail = {
  url: string;
};

type YouTubeSnippet = {
  title: string;
  description?: string;
  publishedAt: string;
  thumbnails?: {
    maxres?: YouTubeThumbnail;
    high?: YouTubeThumbnail;
    medium?: YouTubeThumbnail;
    default?: YouTubeThumbnail;
  };
};

type YouTubePlaylist = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  itemCount: number;
};

type PodcastVideo = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  playlistId: string;
  playlistTitle: string;
};

type PlaylistsResponse = {
  nextPageToken?: string;
  items: Array<{
    id: string;
    snippet: YouTubeSnippet;
    contentDetails?: {
      itemCount?: number;
    };
  }>;
};

type PlaylistItemsResponse = {
  nextPageToken?: string;
  items: Array<{
    snippet: YouTubeSnippet & {
      resourceId?: {
        videoId?: string;
      };
    };
    contentDetails?: {
      videoId?: string;
      videoPublishedAt?: string;
    };
  }>;
};

type YouTubeErrorResponse = {
  error?: {
    code?: number;
    message?: string;
    errors?: Array<{
      reason?: string;
    }>;
  };
};

const getThumbnail = (snippet: YouTubeSnippet) =>
  snippet.thumbnails?.maxres?.url ??
  snippet.thumbnails?.high?.url ??
  snippet.thumbnails?.medium?.url ??
  snippet.thumbnails?.default?.url ??
  "";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));

const fetchYouTubePages = async <T extends { nextPageToken?: string }>(
  baseUrl: string,
  maxPages = Number.POSITIVE_INFINITY,
): Promise<T[]> => {
  const pages: T[] = [];
  let pageToken = "";

  do {
    const url = new URL(baseUrl);

    if (pageToken) {
      url.searchParams.set("pageToken", pageToken);
    }

    const response = await fetch(url.toString());

    if (!response.ok) {
      const errorData = (await response.json().catch(() => null)) as
        | YouTubeErrorResponse
        | null;
      const reason = errorData?.error?.errors?.[0]?.reason;

      if (response.status === 403 && reason === "quotaExceeded") {
        throw new Error(
          "The podcast YouTube API key has exceeded its daily quota. Try again after the quota resets or use a key from a project with available YouTube Data API quota.",
        );
      }

      throw new Error(
        errorData?.error?.message ?? "Unable to load YouTube content.",
      );
    }

    const data = (await response.json()) as T;
    pages.push(data);
    pageToken = data.nextPageToken ?? "";
  } while (pageToken && pages.length < maxPages);

  return pages;
};

const Podcasts = () => {
  const [playlists, setPlaylists] = useState<YouTubePlaylist[]>([]);
  const [videos, setVideos] = useState<PodcastVideo[]>([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState("all");
  const canLoadYouTube = Boolean(youtubeApiKey && podcastChannelId);
  const [loading, setLoading] = useState(canLoadYouTube);
  const [error, setError] = useState<string | null>(
    canLoadYouTube
      ? null
      : "Add VITE_PODCAST_YOUTUBE_API_KEY and VITE_PODCAST_YOUTUBE_CHANNEL_ID to load live podcast videos.",
  );

  useEffect(() => {
    if (!youtubeApiKey || !podcastChannelId) {
      return;
    }

    const loadPodcasts = async () => {
      setLoading(true);
      setError(null);

      try {
        const playlistsUrl = new URL(
          "https://www.googleapis.com/youtube/v3/playlists",
        );
        playlistsUrl.searchParams.set("part", "snippet,contentDetails");
        playlistsUrl.searchParams.set("channelId", podcastChannelId);
        playlistsUrl.searchParams.set(
          "maxResults",
          String(podcastPlaylistFetchLimit),
        );
        playlistsUrl.searchParams.set("key", youtubeApiKey);

        const playlistPages =
          await fetchYouTubePages<PlaylistsResponse>(
            playlistsUrl.toString(),
            1,
          );

        const fetchedPlaylists = playlistPages
          .flatMap((page) => page.items)
          .map((item) => ({
            id: item.id,
            title: item.snippet.title,
            description: item.snippet.description ?? "",
            thumbnail: getThumbnail(item.snippet),
            publishedAt: item.snippet.publishedAt,
            itemCount: item.contentDetails?.itemCount ?? 0,
          }))
          .sort(
            (a, b) =>
              new Date(b.publishedAt).getTime() -
              new Date(a.publishedAt).getTime(),
          );

        const playlistVideos = await Promise.all(
          fetchedPlaylists.map(async (playlist) => {
            const playlistItemsUrl = new URL(
              "https://www.googleapis.com/youtube/v3/playlistItems",
            );
            playlistItemsUrl.searchParams.set(
              "part",
              "snippet,contentDetails",
            );
            playlistItemsUrl.searchParams.set("playlistId", playlist.id);
            playlistItemsUrl.searchParams.set(
              "maxResults",
              String(podcastVideosPerPlaylistLimit),
            );
            playlistItemsUrl.searchParams.set("key", youtubeApiKey);

            const playlistItemPages =
              await fetchYouTubePages<PlaylistItemsResponse>(
                playlistItemsUrl.toString(),
                1,
              );

            return playlistItemPages
              .flatMap((page) => page.items)
              .map((item) => {
                const id =
                  item.contentDetails?.videoId ??
                  item.snippet.resourceId?.videoId ??
                  "";

                if (!id || item.snippet.title === "Private video") {
                  return null;
                }

                return {
                  id,
                  title: item.snippet.title,
                  description: item.snippet.description ?? "",
                  thumbnail: getThumbnail(item.snippet),
                  publishedAt:
                    item.contentDetails?.videoPublishedAt ??
                    item.snippet.publishedAt,
                  playlistId: playlist.id,
                  playlistTitle: playlist.title,
                };
              })
              .filter((video): video is PodcastVideo => Boolean(video));
          }),
        );

        const uniqueVideos = Array.from(
          new Map(
            playlistVideos
              .flat()
              .sort(
                (a, b) =>
                  new Date(b.publishedAt).getTime() -
                  new Date(a.publishedAt).getTime(),
              )
              .map((video) => [video.id, video]),
          ).values(),
        );

        setPlaylists(fetchedPlaylists);
        setVideos(uniqueVideos);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Unable to load YouTube content.",
        );
      } finally {
        setLoading(false);
      }
    };

    loadPodcasts();
  }, []);

  const filteredVideos = useMemo(() => {
    if (selectedPlaylist === "all") {
      return videos;
    }

    return videos.filter((video) => video.playlistId === selectedPlaylist);
  }, [selectedPlaylist, videos]);

  const featuredVideo = filteredVideos[0] ?? videos[0];

  return (
    <>
      <FooterPageHeroSection
        title="Podcasts"
        description="Tune in for expert insights, success stories, and practical advice to advance your project, program and portfolio management career."
      />

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-6 md:gap-10 items-start">
            <div>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                Tune in for Expert Insights
              </h2>
              <p className="text-paragraph text-sm md:text-base font-normal mt-2 md:leading-[30px]">
                Browse podcast videos from Dharam Singh's YouTube channel,
                loaded from playlists and sorted by date with the latest
                episodes first.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-5 md:mt-7">
                <a href={podcastChannelUrl} target="_blank" rel="noreferrer">
                  <Button>Youtube link</Button>
                </a>
                <Button
                  variant="outline"
                  onClick={() => window.location.reload()}
                  className="gap-2"
                >
                  <RefreshCcw size={16} />
                  Refresh Episodes
                </Button>
              </div>
            </div>

            <div className="rounded-2xl bg-light-blue px-4 md:px-7 py-5 md:py-7">
              <div className="size-[60px] text-primary_heading flex items-center justify-center bg-white rounded-[99px] outline outline-1 outline-offset-[-1px] outline-[#4c8dea]">
                <Headphones size={28} strokeWidth={2} />
              </div>
              <h3 className="text-primary_heading text-xl md:text-2xl font-bold mt-4">
                Subscribe
              </h3>
              <p className="text-paragraph text-sm font-normal leading-[26px] mt-2">
                Stay up to date by subscribing through your favorite streaming
                app.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-5">
                <div>
                  <p className="text-primary_heading text-3xl font-bold">
                    {loading ? "--" : playlists.length}
                  </p>
                  <p className="text-paragraph text-sm leading-[26px]">
                    Playlists
                  </p>
                </div>
                <div>
                  <p className="text-primary_heading text-3xl font-bold">
                    {loading ? "--" : videos.length}
                  </p>
                  <p className="text-paragraph text-sm leading-[26px]">
                    Episodes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {featuredVideo && (
        <section className="bg-light-blue py-10 md:py-14 lg:py-20">
          <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-5 md:gap-7 items-center">
              <div className="aspect-video w-full overflow-hidden rounded-[20px] bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${featuredVideo.id}`}
                  title={featuredVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div>
                <p className="text-primary_heading text-sm font-semibold leading-[26px]">
                  Latest Podcast
                </p>
                <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                  {featuredVideo.title}
                </h2>
                <div className="flex flex-wrap gap-3 mt-3 text-paragraph text-sm">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays size={16} />
                    {formatDate(featuredVideo.publishedAt)}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <ListVideo size={16} />
                    {featuredVideo.playlistTitle}
                  </span>
                </div>
                <p className="text-paragraph text-sm font-normal leading-[26px] mt-4 line-clamp-5">
                  {featuredVideo.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="mb-5 md:mb-7">
            <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
              Podcast Library
            </h2>
          </div>

          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3 md:gap-y-5">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="h-[320px] animate-pulse rounded-[20px] bg-light-blue"
                />
              ))}
            </div>
          )}

          {!loading && error && (
            <div className="rounded-2xl bg-light-blue px-4 md:px-7 py-5 md:py-7 text-center">
              <h3 className="text-Black_light text-xl md:text-2xl font-bold">
                Live podcast content is not connected yet
              </h3>
              <p className="text-paragraph text-sm md:text-base leading-[26px] mt-2 max-w-[780px] mx-auto">
                {error} Once configured, this page will fetch playlists and
                podcast videos from the Dharam YouTube channel.
              </p>
              <a href={podcastChannelUrl} target="_blank" rel="noreferrer">
                <Button className="mt-5">Open YouTube Channel</Button>
              </a>
            </div>
          )}

          {!loading && !error && (
            <>
              <div className="flex gap-2 overflow-x-auto pb-3 mb-5">
                <button
                  onClick={() => setSelectedPlaylist("all")}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
                    selectedPlaylist === "all"
                      ? "bg-primary_blue text-white"
                      : "bg-light-blue text-primary_heading"
                  }`}
                >
                  All Playlists
                </button>
                {playlists.map((playlist) => (
                  <button
                    key={playlist.id}
                    onClick={() => setSelectedPlaylist(playlist.id)}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
                      selectedPlaylist === playlist.id
                        ? "bg-primary_blue text-white"
                        : "bg-light-blue text-primary_heading"
                    }`}
                  >
                    {playlist.title}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3 md:gap-y-5">
                {filteredVideos.map((video) => (
                  <article
                    key={`${video.playlistId}-${video.id}`}
                    className="p-4 md:p-5 bg-light-blue rounded-[20px] flex flex-col"
                  >
                    <a
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative block aspect-video overflow-hidden rounded-2xl bg-black"
                    >
                      {video.thumbnail && (
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="h-full w-full object-cover transition group-hover:scale-105"
                        />
                      )}
                      <span className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <span className="flex size-12 items-center justify-center rounded-full bg-white text-primary_heading">
                          <Play size={22} fill="currentColor" />
                        </span>
                      </span>
                    </a>
                    <div className="flex flex-col flex-1">
                      <p className="text-primary_heading text-xs font-semibold leading-5 mt-4">
                        {video.playlistTitle}
                      </p>
                      <h3 className="text-primary_heading text-base md:text-xl font-bold mt-1 mb-2 line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-paragraph text-xs font-normal leading-6 line-clamp-3">
                        {video.description}
                      </p>
                      <p className="text-paragraph text-xs font-semibold mt-4">
                        Published on {formatDate(video.publishedAt)}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              {filteredVideos.length === 0 && (
                <div className="rounded-2xl bg-light-blue px-4 md:px-7 py-5 md:py-7 text-center">
                  <p className="text-paragraph text-sm leading-[26px]">
                    No podcast videos were found for this playlist.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <TopFooterSection
        content={{
          title: <>Stay Current With Practical Project Leadership Insights</>,
          description:
            "Subscribe for expert conversations, success stories, and practical advice for project, program, and portfolio management professionals.",
          points: [
            "Podcast playlists loaded from YouTube",
            "Latest episodes shown first",
            "Expert insights and career guidance",
          ],
          buttonText: "Subscribe on YouTube",
          buttonLink: podcastChannelUrl,
          secondaryButtonText: "Book a Consultation",
          secondaryButtonLink: CALENDLY_CONSULTATION_URL,
        }}
      />
    </>
  );
};

export default Podcasts;
