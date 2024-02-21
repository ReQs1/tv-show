import { Link } from "react-router-dom";
import { MovieType, ShowType } from "@/lib/types";
import { formatTime, truncate } from "@/lib/utils";
import { useQuery } from "react-query";
import { getMovieDetails } from "@/services/themoviedbAPI";

type CardProps = {
  movie: ShowType | MovieType;
  lastRef?: (node: HTMLDivElement | null) => void;
  type?: string;
  currentGenre?: string;
};

function InfiniteScrollCard({ movie, lastRef, type, currentGenre }: CardProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["infiniteScrollDetails", movie.id, type],
    queryFn: () => {
      if (type) {
        return getMovieDetails(movie.id, type);
      }
    },
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
    <div className="flex flex-col flex-1 basis-48" ref={lastRef}>
      <Link to={`/${type}/${movie.id}`}>
        <img
          loading="lazy"
          className="w-full md:h-[288px] rounded-lg"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title || ("name" in movie ? movie.name : "")}
        />
      </Link>
      <div className="flex flex-col justify-between flex-1 gap-2">
        <h3 className="mt-3 text-2xl font-semibold md:text-lg">
          {truncate(movie.title) ||
            ("name" in movie ? truncate(movie.name) : "")}
        </h3>
        {!(currentGenre === "") ? (
          <ul className="flex gap-2 text-lg md:text-base">
            <li>{movieDetail}</li>
            <li>•</li>
            <li>
              {movie.release_date?.slice(0, 4) ||
                ("first_air_date" in movie
                  ? movie.first_air_date?.slice(0, 4)
                  : "")}
            </li>
          </ul>
        ) : (
          <p>
            {movie.release_date?.slice(0, 4) ||
              ("first_air_date" in movie
                ? movie.first_air_date?.slice(0, 4)
                : "")}
          </p>
        )}
        {!(currentGenre === "") && (
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
