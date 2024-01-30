import { useQuery } from "react-query";
import { getTrendingMovies } from "../services/themoviedbAPI";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import CarouselCard from "./CarouselCard";
import type { MovieType } from "@/lib/types";

function TrendingMovies() {
  const { data: trendingMovies } = useQuery(
    "trendingMovies",
    getTrendingMovies
  );

  return (
    <section className="">
      <h2 className="px-3 mb-5 text-3xl font-bold md:px-8 md:text-4xl">
        Trending Movies
      </h2>
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent className="-ml-4">
          {trendingMovies?.map((movie: MovieType) => (
            <CarouselItem key={movie.id} className="pl-4 basis-auto">
              <CarouselCard movie={movie} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 h-full text-white border-none rounded-none md:w-20 w-14 top-1/2 bg-black/60 focus:bg-black/70 hover:bg-black/60 hover:text-white" />
        <CarouselNext className="absolute right-0 h-full text-white border-none rounded-none md:w-20 w-14 top-1/2 bg-black/60 focus:bg-black/70 hover:bg-black/60 hover:text-white" />
      </Carousel>
    </section>
  );
}

export default TrendingMovies;
