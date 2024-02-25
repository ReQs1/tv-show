import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import { Skeleton } from "./skeleton";

type Props = {
  kind: "homepage" | "showpage" | "cast";
};

function LoadingCarousel({ kind }: Props) {
  return (
    <section className="mb-16">
      <div className="px-4 mb-8 space-y-4 md:px-10">
        <Skeleton
          className={cn("w-60 h-[45px]", {
            ["h-[45px w-52]"]: kind === "cast",
          })}
        />
        {kind === "homepage" && <Skeleton className="w-96 h-[30px]" />}
      </div>

      <Carousel
        opts={{
          align: "start",
          watchDrag: false,
          slidesToScroll: "auto",
        }}
      >
        <CarouselContent className="-ml-4">
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <CarouselItem key={i} className="pl-4 basis-auto">
                <Skeleton
                  className={cn("h-52 md:h-64 w-40 md:w-52", {
                    ["h-40 w-60 md:w-72 md:h-40"]: kind === "showpage",
                    ["h-44 w-32 md:h-52 md:w-36"]: kind === "cast",
                  })}
                />
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default LoadingCarousel;
