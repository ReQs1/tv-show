import { Link } from "react-router-dom";
import { MovieType, ShowType } from "@/lib/types";
import { cn, formatTime, truncate } from "@/lib/utils";
import { useQuery } from "react-query";
import { getBasicMovieInfo } from "@/services/themoviedbAPI";

type CardProps = {
  entry: ShowType | MovieType;
  lastRef?: (node: HTMLDivElement | null) => void;
  type: string;
  currentGenre?: string;
};

function InfiniteScrollCard({ entry, lastRef, type, currentGenre }: CardProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["infiniteScrollDetails", entry.id, type],
    queryFn: () => getBasicMovieInfo(entry.id, type),
    enabled: Boolean(type),
  });

  let movieDetail: string | number;

  if (isLoading) {
    movieDetail = "Loading...";
  } else if (error) {
    movieDetail = "Couldn't load details";
  } else if (data && type === "movie" && "runtime" in data) {
    movieDetail = data.runtime === 0 ? "Unreleased" : formatTime(data.runtime);
  } else if (data && type === "tv" && "seasons" in data) {
    movieDetail =
      data.seasons.length === 1
        ? data.seasons.length + " season"
        : data.seasons.length + " seasons";
  } else {
    movieDetail = "Unknown";
  }

  return (
    <div
      className="flex flex-col flex-1 basis-48 lg:max-w-[200px]"
      ref={lastRef}
    >
      <Link to={`/${type}/${entry.id}`}>
        <img
          loading="lazy"
          className={cn(
            "w-full md:h-[288px] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
            {
              ["md:h-[288px]"]: entry.poster_path,
              ["md:h-full"]: !entry.poster_path,
            }
          )}
          src={
            entry.poster_path
              ? `https://image.tmdb.org/t/p/w500${entry.poster_path}`
              : "https://placehold.co/500x750?text=No+Movie+Poster"
          }
          alt={entry.title || ("name" in entry ? entry.name : "")}
        />
      </Link>

      <div className="flex flex-col justify-between flex-1 gap-2">
        <h3 className="mt-3 text-2xl font-semibold md:text-lg">
          {truncate(entry.title) ||
            ("name" in entry ? truncate(entry.name) : "")}
        </h3>

        {!currentGenre ? (
          <ul className="flex items-center gap-1 text-lg md:text-base">
            <li>
              <img
                src={`/${type}Icon.svg`}
                alt={`${type} Icon`}
                className="w-5"
              />
            </li>
            <li>•</li>
            <li>{movieDetail}</li>
            <li>•</li>
            <li>
              {entry.release_date?.slice(0, 4) ||
                ("first_air_date" in entry
                  ? entry.first_air_date?.slice(0, 4)
                  : "")}
            </li>
          </ul>
        ) : (
          <ul className="flex gap-2 text-lg md:text-base">
            <li>{movieDetail}</li>
            {!error && <li>•</li>}
            <li>
              {entry.release_date?.slice(0, 4) ||
                ("first_air_date" in entry
                  ? entry.first_air_date?.slice(0, 4)
                  : "")}
            </li>
          </ul>
        )}

        {currentGenre && (
          <p className="flex items-center gap-3 text-base font-medium uppercase md:text-sm">
            <img
              src={`/${type}Icon.svg`}
              alt={`${type} Icon`}
              className="w-5"
            />
            <span className="tracking-widest">{currentGenre}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default InfiniteScrollCard;
