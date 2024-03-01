import { useInView } from "react-intersection-observer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import CarouselCard from "./CarouselCard";
import type { ShowType, MovieType, CastType } from "@/lib/types";
import { cn } from "@/lib/utils";

type GenericCarouselProps = {
  data: MovieType[] | ShowType[] | CastType[];
  title: string;
  description?: string;
  type?: "movie" | "tv";
  variant?: "big" | "md" | "sm";
  hasArrows: boolean;
  className?: string;
  animateOnInView?: boolean;
};

const buttonClasses =
  "hidden w-10 h-full text-white border-none rounded-none md:flex md:w-20 top-1/2 bg-black/60 focus:bg-black/70 hover:bg-black/60 hover:text-white";

function GenericCarousel({
  data,
  title,
  description,
  type,
  variant,
  hasArrows,
  className,
  animateOnInView,
}: GenericCarouselProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <section
      className={cn("mb-16", className)}
      ref={animateOnInView ? ref : null}
    >
      <div
        className={cn("pl-7 md:pl-10 mb-8 ", {
          ["space-y-4"]: description,
        })}
      >
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        {description && <p className="text-stone-600">{description}</p>}
      </div>

      {data && (
        <Carousel
          className={cn("transition-all duration-700", {
            ["translate-y-12"]: animateOnInView && !inView,
            ["translate-y-0"]: animateOnInView && inView,
          })}
          opts={{
            loop: false,
            align: "start",
            dragFree: true,
            slidesToScroll: "auto",
          }}
        >
          <CarouselContent className="-ml-4">
            {data.map((entry: MovieType | ShowType | CastType) => (
              <CarouselItem key={entry.id} className="pl-4 basis-auto">
                <CarouselCard entry={entry} type={type} variant={variant} />
              </CarouselItem>
            ))}
          </CarouselContent>
          {hasArrows && (
            <>
              <CarouselPrevious className={cn("left-0", buttonClasses)} />
              <CarouselNext className={cn("right-0", buttonClasses)} />
            </>
          )}
        </Carousel>
      )}
    </section>
  );
}

export default GenericCarousel;
