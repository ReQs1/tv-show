import { Bell, CheckCircle2, Eye, Search } from "lucide-react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../assets/tv-show-animation.json";
import { useRef } from "react";

function HomePage() {
  const LottieRef = useRef<LottieRefCurrentProps>(null);
  return (
    <>
      <div className="flex flex-wrap bg-gradient-to-r from-[#3023ae] to-[#c86dd7] text-white px-6">
        <div className="flex flex-col justify-center px-6 py-12 md:w-1/2">
          <h1 className="mb-10 text-3xl md:text-4xl xl:text-4xl">
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
            style={{ width: "500px" }}
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
