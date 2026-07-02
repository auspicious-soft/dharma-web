import { SearchIcon } from "@/utils/svgicons";
import { getSiteSearchResults } from "@/data/siteSearch";
import React, { useMemo, useRef, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [isFocused, setIsFocused] = useState(false);
  const blurTimeout = useRef<number>();

  const results = useMemo(() => getSiteSearchResults(query).slice(0, 5), [query]);
  const trimmedQuery = query.trim();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!trimmedQuery) {
      return;
    }

    navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    setIsFocused(false);
  };

  return (
    <form
      className="relative w-[120px] min-[420px]:w-[180px] sm:w-[220px] lg:w-[260px]"
      role="search"
      onSubmit={handleSubmit}
    >
      <label htmlFor="site-search" className="sr-only">
        Search the site
      </label>
      <input
        id="site-search"
        type="search"
        placeholder="What do you want to learn?"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onFocus={() => {
          window.clearTimeout(blurTimeout.current);
          setIsFocused(true);
        }}
        onBlur={() => {
          blurTimeout.current = window.setTimeout(() => setIsFocused(false), 150);
        }}
        className="rounded-[20px] outline outline-1 outline-offset-[-1px] outline-[#556378] text-paragraph text-xs font-normal p-2.5 pr-9 w-full"
      />
      <button
        type="submit"
        className="absolute top-1/2 translate-y-[-50%] right-2.5 border-0"
        aria-label="Search"
      >
        <SearchIcon />
      </button>
      {isFocused && trimmedQuery && (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-[60] overflow-hidden rounded-[8px] border border-[#E6EEF8] bg-white shadow-lg">
          {results.length > 0 ? (
            <>
              {results.map((result) => (
                <Link
                  key={result.path}
                  to={result.path}
                  className="block px-4 py-3 text-left hover:bg-light-blue"
                  onClick={() => setIsFocused(false)}
                >
                  <span className="block text-sm font-bold leading-5 text-Black_light">
                    {result.title}
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-paragraph">
                    {result.category}
                  </span>
                </Link>
              ))}
              <button
                type="submit"
                className="block w-full border-t border-[#E6EEF8] px-4 py-3 text-left text-xs font-bold text-primary_heading hover:bg-light-blue"
              >
                View all results for "{trimmedQuery}"
              </button>
            </>
          ) : (
            <div className="px-4 py-3 text-xs leading-5 text-paragraph">
              No matches found. Try another keyword.
            </div>
          )}
        </div>
      )}
    </form>
  );
};

export default Search;
