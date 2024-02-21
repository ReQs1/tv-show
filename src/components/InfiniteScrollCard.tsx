import { Link } from "react-router-dom";
import { MovieType, ShowType } from "@/lib/types";
import { formatTime, truncate } from "@/lib/utils";
import { useQuery } from "react-query";
import { getMovieDetails } from "@/services/themoviedbAPI";

type CardProps = {
  movie: ShowType | MovieType;
  lastRef?: (node: HTMLDivElement | null) => void;
  type: string;
  currentGenre: string;
};

function InfiniteScrollCard({
  movie,
  lastRef,
  type = "",
  currentGenre,
}: CardProps) {
  const { data: movieDetail } = useQuery({
    queryKey: ["infiniteScrollDetails", movie.id, type],
    queryFn: () => getMovieDetails(movie.id, type),
  });

  console.log(movieDetail);

  return (
    <div className="flex flex-col flex-1 basis-52" ref={lastRef}>
      <Link to={`/${type}/${movie.id}`}>
        <img
          loading="lazy"
          className="w-full md:h-[288px] rounded-lg"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title || ("name" in movie ? movie.name : "")}
        />
      </Link>
      <div className="flex flex-col justify-between flex-1 gap-2">
        <h3 className="mt-3 text-lg font-semibold">
          {truncate(movie.title) ||
            ("name" in movie ? truncate(movie.name) : "")}
        </h3>
        <ul className="flex gap-2">
          <li>
            {type === "movie"
              ? formatTime(movieDetail?.runtime)
              : type === "tv"
              ? movieDetail?.seasons?.length === 1
                ? movieDetail?.seasons?.length + " season"
                : movieDetail?.seasons?.length + " seasons"
              : ""}
          </li>
          <li>•</li>
          <li>
            {movie.release_date?.slice(0, 4) ||
              ("first_air_date" in movie
                ? movie.first_air_date?.slice(0, 4)
                : "")}
          </li>
        </ul>
        <p className="flex items-center gap-3 text-sm font-medium uppercase">
          <img src={`/${type}Icon.svg`} alt={`${type} Icon`} className="w-5" />
          <span className="tracking-widest">{currentGenre}</span>
        </p>
      </div>
    </div>
  );
}

export default InfiniteScrollCard;
