import { useInView } from "react-intersection-observer";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import CarouselCard from "./CarouselCard";
import type { ShowType, MovieType } from "@/lib/types";
import { cn } from "@/lib/utils";

type GenericCarouselProps = {
  data: MovieType[] | ShowType[];
  title: string;
  description: string;
  type?: "movie" | "tv";
  vartiant?: "big" | "md" | "sm";
  className?: string;
  isAnimation: boolean;
};

function GenericCarousel({
  data,
  title,
  description,
  type,
  vartiant,
  className,
  isAnimation,
}: GenericCarouselProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className={cn("mb-16", className)} ref={isAnimation ? ref : null}>
      <div className="px-4 mb-8 space-y-4 md:px-10">
        <h2 className="flex items-center gap-4 text-3xl font-bold md:text-4xl">
          {title}
        </h2>
        {description && <p className="text-stone-600">{description}</p>}
      </div>

      {data && (
        <Carousel
          className={cn("transition-transform duration-1000", {
            ["translate-y-10"]: !inView,
            ["translate-y-0"]: inView,
          })}
          opts={{
            align: "start",
            dragFree: true,
            slidesToScroll: "auto",
          }}
        >
          <CarouselContent className="-ml-4">
            {data.map((entry: MovieType | ShowType) => (
              <CarouselItem key={entry.id} className="pl-4 basis-auto">
                <CarouselCard entry={entry} type={type} variant={vartiant} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 hidden w-10 h-full text-white border-none rounded-none md:flex md:w-20 top-1/2 bg-black/60 focus:bg-black/70 hover:bg-black/60 hover:text-white" />
          <CarouselNext className="right-0 hidden w-10 h-full text-white border-none rounded-none md:flex md:w-20 top-1/2 bg-black/60 focus:bg-black/70 hover:bg-black/60 hover:text-white" />
        </Carousel>
      )}
    </section>
  );
}

export default GenericCarousel;
