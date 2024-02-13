import type { MovieType } from "@/lib/types";
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

function TrendingMovies() {
  const { data: trendingMovies } = useQuery(
    "trendingMovies",
    getTrendingMovies
  );

  return (
    <section className="mb-16">
      <div className="px-6 mb-8 space-y-4 md:px-10">
        <h2 className="text-3xl font-bold md:text-4xl">Trending Movies</h2>
        <p className="text-stone-600">
          Movies with most reactions in the last 3 days
        </p>
      </div>
      <Carousel
        opts={{
          loop: false,
          align: "start",
          dragFree: true,
        }}
      >
        <CarouselContent className="-ml-5">
          {trendingMovies?.map((movie: MovieType) => (
            <CarouselItem key={movie.id} className="pl-5 basis-auto">
              <CarouselCard movie={movie} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 hidden w-10 h-full text-white border-none rounded-none md:block md:w-20 top-1/2 bg-black/60 focus:bg-black/70 hover:bg-black/60 hover:text-white" />
        <CarouselNext className="absolute right-0 hidden w-10 h-full text-white border-none rounded-none md:block md:w-20 top-1/2 bg-black/60 focus:bg-black/70 hover:bg-black/60 hover:text-white" />
      </Carousel>
    </section>
  );
}

export default TrendingMovies;
