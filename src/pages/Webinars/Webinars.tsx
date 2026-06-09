import FooterPageHeroSection from "@/components/ReusableComponents/FooterPageHeroSection/FooterPageHeroSection";
import TopFooterSection from "@/components/ReusableComponents/TopFooterSection/TopFooterSection";
import { CALENDLY_CONSULTATION_URL } from "@/utils/links";
import { Button } from "@/components/ui/button";
import { CalendarDays, ListVideo, Play, RefreshCcw } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const youtubeChannelId = "UCWg9sBRmPCcpVy2KY5AtjQQ";
const youtubeChannelUrl = "https://bit.ly/vCareYT";
const youtubeApiKey = import.meta.env.VITE_YOUTUBE_API_KEY as
  | string
  | undefined;

type YouTubePlaylist = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  itemCount: number;
};

type WebinarVideo = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  playlistId: string;
  playlistTitle: string;
};

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
      videoOwnerChannelId?: string;
    };
    contentDetails?: {
      videoId?: string;
      videoPublishedAt?: string;
    };
  }>;
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
      throw new Error("Unable to load YouTube content.");
    }

    const data = (await response.json()) as T;
    pages.push(data);
    pageToken = data.nextPageToken ?? "";
  } while (pageToken);

  return pages;
};

const Webinars = () => {
  const [playlists, setPlaylists] = useState<YouTubePlaylist[]>([]);
  const [videos, setVideos] = useState<WebinarVideo[]>([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState("all");
  const [loading, setLoading] = useState(Boolean(youtubeApiKey));
  const [error, setError] = useState<string | null>(
    youtubeApiKey ? null : "Add VITE_YOUTUBE_API_KEY to load live webinar videos.",
  );

  useEffect(() => {
    if (!youtubeApiKey) {
      return;
    }

    const loadWebinars = async () => {
      setLoading(true);
      setError(null);

      try {
        const playlistsUrl = new URL(
          "https://www.googleapis.com/youtube/v3/playlists",
        );
        playlistsUrl.searchParams.set("part", "snippet,contentDetails");
        playlistsUrl.searchParams.set("channelId", youtubeChannelId);
        playlistsUrl.searchParams.set("maxResults", "50");
        playlistsUrl.searchParams.set("key", youtubeApiKey);

        const playlistPages =
          await fetchYouTubePages<PlaylistsResponse>(
            playlistsUrl.toString(),
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
            playlistItemsUrl.searchParams.set("maxResults", "50");
            playlistItemsUrl.searchParams.set("key", youtubeApiKey);

            const playlistItemPages =
              await fetchYouTubePages<PlaylistItemsResponse>(
                playlistItemsUrl.toString(),
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
              .filter((video): video is WebinarVideo => Boolean(video));
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

    loadWebinars();
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
        title="Webinars"
        description="Watch, Learn & Grow. Explore our learning hub featuring on-demand presentations, expert-led sessions, industry insights, and professional development topics."
      />

      <section className="py-10 md:py-14 lg:py-20">
        <div className="max-w-[1226px] w-full px-3 md:px-4 m-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-6 md:gap-10 items-start">
            <div>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                Watch, Learn & Grow
              </h2>
              <p className="text-paragraph text-sm md:text-base font-normal mt-2 md:leading-[30px]">
                Explore vCare Project Management webinars pulled directly from
                our YouTube channel playlists. Sessions are sorted by date with
                the latest webinar first.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-5 md:mt-7">
                <a href={youtubeChannelUrl} target="_blank" rel="noreferrer">
                  <Button>Visit YouTube Channel</Button>
                </a>
                <Button
                  variant="outline"
                  onClick={() => window.location.reload()}
                  className="gap-2"
                >
                  <RefreshCcw size={16} />
                  Refresh Videos
                </Button>
              </div>
            </div>

            <div className="rounded-2xl bg-light-blue px-4 md:px-7 py-5 md:py-7">
              <div className="grid grid-cols-2 gap-4">
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
                    Videos
                  </p>
                </div>
              </div>
              <p className="text-paragraph text-sm leading-[26px] mt-4">
                Content is loaded live from the vCare YouTube channel using the
                YouTube Data API.
              </p>
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
                  Latest Webinar
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
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-5 md:mb-7">
            <div>
              <h2 className="text-Black_light text-2xl md:text-3xl font-bold md:leading-[46px]">
                YouTube Playlist Library
              </h2>
              <p className="text-paragraph text-sm font-normal mt-1 leading-[26px]">
                Choose a playlist or view all webinar videos sorted by latest
                date first.
              </p>
            </div>
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
                Live YouTube content is not connected yet
              </h3>
              <p className="text-paragraph text-sm md:text-base leading-[26px] mt-2 max-w-[760px] mx-auto">
                {error} Once the key is configured, this page will fetch all
                playlists and playlist videos from the vCare YouTube channel.
              </p>
              <a href={youtubeChannelUrl} target="_blank" rel="noreferrer">
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
                    No videos were found for this playlist.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <TopFooterSection
        content={{
          title: <>Keep Growing With Expert-Led Sessions</>,
          description:
            "Explore the latest vCare webinar playlists and continue building practical project, program, portfolio, PMO, agile, and leadership skills.",
          points: [
            "On-demand webinars from YouTube playlists",
            "Industry insights and expert-led presentations",
            "Latest sessions shown first",
          ],
          buttonText: "Visit YouTube Channel",
          buttonLink: youtubeChannelUrl,
          secondaryButtonText: "Book a Consultation",
          secondaryButtonLink: CALENDLY_CONSULTATION_URL,
        }}
      />
    </>
  );
};

export default Webinars;
