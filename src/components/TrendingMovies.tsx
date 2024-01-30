import { useQuery } from "react-query";
import { getTrendingMovies } from "../services/themoviedbAPI";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import CarouselCard from "./CarouselCard";
import type { MovieType } from "@/lib/types";

function TrendingMovies() {
  const { data: trendingMovies } = useQuery(
    "trendingMovies",
    getTrendingMovies
  );

  return (
    <section className="px-6">
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">Trending Movies</h2>
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
      </Carousel>
    </section>
  );
}

export default TrendingMovies;
