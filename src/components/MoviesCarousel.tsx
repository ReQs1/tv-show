import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import Card from "./Card";
import type { ShowType, MovieType } from "@/lib/types";

type MoviesCarouselProps = {
  data: MovieType[] | ShowType[];
  title: string;
  description: string;
};

function MoviesCarousel({ data, title, description }: MoviesCarouselProps) {
  return (
    <section className="mb-16">
      <div className="px-4 mb-8 space-y-4 md:px-10">
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        <p className="text-stone-600">{description}</p>
      </div>
      <Carousel
        opts={{
          loop: false,
          align: "start",
          dragFree: true,
        }}
      >
        <CarouselContent className="-ml-4">
          {data?.map((movie: MovieType | ShowType) => (
            <CarouselItem key={movie.id} className="pl-4 basis-auto">
              <Card movie={movie} />
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
