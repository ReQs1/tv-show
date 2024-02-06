import { useQuery } from "react-query";
import CarouselCard from "./CarouselCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import { ShowType } from "@/lib/types";
import { getAiringShows } from "@/services/themoviedbAPI";

function AiringShows() {
  const { data: airingShows } = useQuery("airingShows", getAiringShows);

  return (
    <section className="mb-16">
      <div className="px-6 mb-8 space-y-4 md:px-10">
        <h2 className="text-3xl font-bold md:text-4xl">Airing Today</h2>
        <p className="text-stone-600">TV shows airing today</p>
      </div>
      <Carousel
        opts={{
          loop: true,
          align: "start",
          dragFree: true,
        }}
      >
        <CarouselContent className="container -ml-5">
          {airingShows?.map((movie: ShowType) => (
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

export default AiringShows;
