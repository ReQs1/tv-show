import type { MovieType } from "@/lib/types";

function CarouselCard({ movie }: { movie: MovieType }) {
  console.log(movie);
  const { poster_path } = movie;

  return (
    <div
      //   className="bg-cover bg-norepeat rounder-md"
      className="flex items-end w-48 p-3 bg-center bg-no-repeat bg-cover rounded-lg cursor-pointer h-60 bg-gradient-to-b from-transparent to-black"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0) 0%, rgba(0,0,0,0.8) 85%), url('https://image.tmdb.org/t/p/original${poster_path}')`,
      }}
    >
      <h3 className="text-lg font-bold text-white">{movie.title}</h3>
    </div>
  );
}

export default CarouselCard;
