import { useRef } from "react";

import animationData from "../assets/tv-show-animation.json";

import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { Bell, CheckCircle2, Eye, Search } from "lucide-react";
import TrendingMovies from "@/components/TrendingMovies";
import TrendingShows from "@/components/TrendingShows";
import NowPlayingMovies from "@/components/NowPlayingMovies";
import AiringShows from "@/components/AiringShows";
import GenresList from "@/components/GenresList";

function HomePage() {
  const LottieRef = useRef<LottieRefCurrentProps>(null);
  LottieRef.current?.setSpeed(0.8);

  return (
    <>
      <div className="flex flex-wrap px-6 mb-20 text-black bg-gray-50">
        <div className="flex flex-col justify-center py-12 md:pl-6 md:w-1/2">
          <h1 className="mb-10 text-2xl md:text-3xl xl:text-4xl">
            Join the world's largest community of TV and movie fans
          </h1>
          <ul className="space-y-4 text-sm xl:space-y-6 xl:text-xl">
            <li className="space-x-4">
              <CheckCircle2 className="inline-block mr-3" />
              Keep track of everything you are watching
            </li>
            <li>
              <Eye className="inline-block mr-3" />
              Find out where you can watch it
            </li>
            <li>
              <Bell className="inline-block mr-3" />
              Get notifications when it's available
            </li>
            <li>
              <Search className="inline-block mr-3" />
              Discover what to watch next!
            </li>
          </ul>
        </div>
        <div className="hidden md:justify-center md:w-1/2 md:flex">
          <Lottie
            animationData={animationData}
            lottieRef={LottieRef}
            style={{ width: "480px" }}
          />
        </div>
      </div>

      <TrendingShows />
      <TrendingMovies />
      <NowPlayingMovies />
      <AiringShows />

      <GenresList />
    </>
  );
}

export default HomePage;
