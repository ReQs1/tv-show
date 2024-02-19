import { Link, useSearchParams } from "react-router-dom";
import { MovieType, ShowType } from "@/lib/types";
import { truncate } from "@/lib/utils";

type GenreCardProps = {
  movie: ShowType | MovieType;
  lastRef?: (node: HTMLDivElement | null) => void;
};

function GenreCard({ movie, lastRef }: GenreCardProps) {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("view");

  return (
    <div className="flex flex-col flex-1 basis-52" ref={lastRef}>
      <Link to={`/${type}/${movie.id}`}>
        <img
          loading="lazy"
          className="rounded-lg md:h-[288px] w-full"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title || ("name" in movie ? movie.name : "")}
        />
      </Link>
      <div className="flex flex-col justify-between flex-1 gap-2">
        <h3 className="mt-3 text-lg font-semibold">
          {truncate(movie.title) ||
            ("name" in movie ? truncate(movie.name) : "")}
        </h3>
        <p>
          {movie.release_date?.slice(0, 4) ||
            ("first_air_date" in movie
              ? movie.first_air_date?.slice(0, 4)
              : "")}
        </p>
      </div>
    </div>
  );
}

export default GenreCard;
