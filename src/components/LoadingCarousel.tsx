import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import { Skeleton } from "./skeleton";

function LoadingCarousel() {
  return (
    <section className="mb-16">
      <div className="px-4 mb-8 space-y-4 md:px-10">
        <Skeleton className="w-60 h-[45px]" />
        <Skeleton className="w-96 h-[30px]" />
      </div>

      <Carousel
        opts={{
          align: "start",
          dragFree: true,
          slidesToScroll: "auto",
        }}
      >
        <CarouselContent className="-ml-4">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <CarouselItem key={i} className="pl-4 basis-auto">
                <Skeleton className="w-40 h-52 md:h-64 md:w-52" />
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default LoadingCarousel;
