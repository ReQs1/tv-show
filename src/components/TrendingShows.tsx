import { useQuery } from "react-query";
import { getTrendingShows } from "../services/themoviedbAPI";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import CarouselCard from "./CarouselCard";
import type { ShowType } from "@/lib/types";
import { memo } from "react";

const TrendingShows = memo(function TrendingShows() {
  const { data: trendingShows } = useQuery("trendingShows", getTrendingShows);

  return (
    <section className="mb-16">
      <div className="px-6 mb-8 space-y-4 md:px-10">
        <h2 className="text-3xl font-bold md:text-4xl">Trending Shows</h2>
        <p className="text-stone-600">
          Shows with most reactions in the last 3 days
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
          {trendingShows?.map((movie: ShowType) => (
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
});

export default TrendingShows;
