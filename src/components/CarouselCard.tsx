import type { MovieType, ShowType } from "@/lib/types";

type PropType = {
  movie: ShowType | MovieType;
};

function CarouselCard({ movie }: PropType) {
  return (
    <div
      onClick={() => console.log(movie)}
      className="flex items-end h-64 p-3 bg-center bg-no-repeat bg-cover rounded-lg cursor-pointer w-52 bg-gradient-to-b from-transparent to-black"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0) 0%, rgba(0,0,0,0.8) 85%), url('https://image.tmdb.org/t/p/original${movie.poster_path}')`,
      }}
    >
      <h3 className="text-lg font-bold text-white">
        {movie.title || ("name" in movie ? movie.name : "")}
      </h3>
    </div>
  );
}

export default CarouselCard;
