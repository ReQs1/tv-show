import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import CarouselCard from "./CarouselCard";
import type { ShowType, MovieType } from "@/lib/types";
import { Skeleton } from "./skeleton";

type MoviesCarouselProps = {
  data: MovieType[] | ShowType[];
  title: string;
  description: string;
  isLoading: boolean;
};

function MoviesCarousel({
  data,
  title,
  description,
  isLoading,
}: MoviesCarouselProps) {
  return (
    <section className="mb-16">
      <div className="px-4 mb-8 space-y-4 md:px-10">
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        <p className="text-stone-600">{description}</p>
      </div>
      <Carousel
        opts={{
          loop: true,
          align: "start",
          dragFree: true,
          slidesToScroll: "auto",
        }}
      >
        <CarouselContent className="-ml-4">
          {isLoading &&
            Array(10)
              .fill(0)
              .map((_, i) => (
                <CarouselItem key={i} className="pl-4 basis-auto">
                  <Skeleton className="w-40 h-52 md:h-64 md:w-52" />
                </CarouselItem>
              ))}
          {data?.map((movie: MovieType | ShowType) => (
            <CarouselItem key={movie.id} className="pl-4 basis-auto">
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

export default MoviesCarousel;
