import { useRef } from "react";
import { useInView } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import CarouselCard from "./CarouselCard";
import type { ShowType, MovieType } from "@/lib/types";

type MoviesCarouselProps = {
  data: MovieType[] | ShowType[];
  title: string;
  description: string;
};

function MoviesCarousel({ data, title, description }: MoviesCarouselProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className="mb-16"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(30px)",
        opacity: isInView ? 1 : 0,
        transition: "transform 0.8s, opacity 0.8s",
      }}
    >
      <div className="px-4 mb-8 space-y-4 md:px-10">
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        <p className="text-stone-600">{description}</p>
      </div>

      {data && (
        <Carousel
          opts={{
            loop: true,
            align: "start",
            dragFree: true,
            slidesToScroll: "auto",
          }}
        >
          <CarouselContent className="-ml-4">
            {data &&
              data.map((entry: MovieType | ShowType) => (
                <CarouselItem key={entry.id} className="pl-4 basis-auto">
                  <CarouselCard movie={entry} />
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 hidden w-10 h-full text-white border-none rounded-none md:block md:w-20 top-1/2 bg-black/60 focus:bg-black/70 hover:bg-black/60 hover:text-white" />
          <CarouselNext className="absolute right-0 hidden w-10 h-full text-white border-none rounded-none md:block md:w-20 top-1/2 bg-black/60 focus:bg-black/70 hover:bg-black/60 hover:text-white" />
        </Carousel>
      )}
    </section>
  );
}

export default MoviesCarousel;
