import { getNowPlayingMovies } from "@/services/themoviedbAPI";

import { useQuery } from "react-query";

import CarouselCard from "./CarouselCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import { MovieType } from "@/lib/types";

function NowPlayingMovies() {
  const { data: nowPlayingMovies } = useQuery(
    "nowPlaying",
    getNowPlayingMovies
  );

  return (
    <section className="mb-16">
      <div className="px-6 mb-8 space-y-4 md:px-10">
        <h2 className="text-3xl font-bold md:text-4xl">Now Playing Movies</h2>
        <p className="text-stone-600">Movies that are currently in theatres</p>
      </div>
      <Carousel
        opts={{
          loop: true,
          align: "start",
          dragFree: true,
        }}
      >
        <CarouselContent className="-ml-5">
          {nowPlayingMovies?.map((movie: MovieType) => (
            <CarouselItem key={movie.id} className="pl-5 basis-auto">
              <CarouselCard movie={movie} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 w-10 h-full text-white border-none rounded-none md:w-20 top-1/2 bg-black/60 focus:bg-black/70 hover:bg-black/60 hover:text-white" />
        <CarouselNext className="absolute right-0 w-10 h-full text-white border-none rounded-none md:w-20 top-1/2 bg-black/60 focus:bg-black/70 hover:bg-black/60 hover:text-white" />
      </Carousel>
    </section>
  );
}

export default NowPlayingMovies;
