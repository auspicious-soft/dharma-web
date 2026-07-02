import { getSiteSearchResults } from "@/data/siteSearch";
import { Link, useSearchParams } from "react-router-dom";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.trim() ?? "";
  const results = getSiteSearchResults(query);

  return (
    <main className="bg-light-blue py-10 md:py-14 lg:py-20">
      <div className="mx-auto w-full max-w-[1226px] px-3 md:px-4">
        <div className="mb-8">
          <p className="text-sm font-bold text-primary_heading">Site Search</p>
          <h1 className="mt-2 text-Black_light text-3xl font-bold md:text-4xl">
            {query ? `Results for "${query}"` : "Search the Site"}
          </h1>
          <p className="mt-3 max-w-[760px] text-sm leading-[26px] text-paragraph md:text-base md:leading-[30px]">
            {query
              ? `${results.length} result${results.length === 1 ? "" : "s"} found across courses, resources, company pages, and policies.`
              : "Use the search box in the header to find courses, resources, support pages, and company information."}
          </p>
        </div>

        {query && results.length > 0 && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {results.map((result) => (
              <Link
                key={result.path}
                to={result.path}
                className="rounded-[8px] border border-[#E6EEF8] bg-white p-5 shadow-sm transition-colors hover:border-primary_blue"
              >
                <span className="text-xs font-bold uppercase text-primary_heading">
                  {result.category}
                </span>
                <h2 className="mt-2 text-lg font-bold leading-7 text-Black_light">
                  {result.title}
                </h2>
                <p className="mt-2 text-sm leading-[26px] text-paragraph">
                  {result.description}
                </p>
              </Link>
            ))}
          </div>
        )}

        {query && results.length === 0 && (
          <div className="rounded-[8px] border border-[#E6EEF8] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-Black_light">
              No results found
            </h2>
            <p className="mt-2 text-sm leading-[26px] text-paragraph">
              Try searching for a certification like PMP, a product like exam
              simulator, or a topic like webinars.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default SearchResults;
