import { cn } from "@/lib/utils";
import { ArrowBigUp } from "lucide-react";
import { useEffect, useState } from "react";

function ScrollToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      className={cn(
        "fixed p-3 bg-yellow-400 rounded-full bottom-14 right-6 transition-opacity z-50 hover:text-white focus:text-white shadow-xl",
        {
          ["opacity-0 invisible"]: !isVisible,
        }
      )}
    >
      <ArrowBigUp />
      <span className="sr-only">scroll to top</span>
    </button>
  );
}

export default ScrollToTopBtn;
