import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import CarouselCard from "./CarouselCard";

import { EpisodeType } from "@/lib/types";
import { cn } from "@/lib/utils";

type EpisodesAccordionProps = {
  data: EpisodeType[];
  title?: string;
  type?: "movie" | "tv";
  vartiant?: "big" | "md" | "sm";
  className?: string;
  defaultValue: boolean;
};

function EpisodesAccordion({
  data,
  title,
  type,
  vartiant,
  className,
  defaultValue,
}: EpisodesAccordionProps) {
  const [isOpened, setIsOpened] = useState(defaultValue);

  return (
    <section className={cn("mb-16", className)}>
      <div className="px-4 mb-8 space-y-4 w-fit md:px-10">
        <h2 className="flex items-center gap-4 text-3xl font-bold md:text-4xl">
          {title}
          {isOpened ? (
            <button onClick={() => setIsOpened((prev) => !prev)}>
              <ChevronUp color="#000" size={32} />
            </button>
          ) : (
            <button onClick={() => setIsOpened((prev) => !prev)}>
              <ChevronDown color="#000" size={32} />
            </button>
          )}
        </h2>
      </div>

      {isOpened && (
        <Carousel
          opts={{
            align: "start",
            dragFree: true,
            slidesToScroll: "auto",
          }}
        >
          <CarouselContent className="-ml-4">
            {data.map((entry: EpisodeType) => (
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

export default EpisodesAccordion;
