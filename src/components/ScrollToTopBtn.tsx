import useIsScrolled from "@/hooks/useIsScrolled";
import { cn } from "@/lib/utils";
import { ArrowBigUp } from "lucide-react";

function ScrollToTopBtn() {
  const isScrolled = useIsScrolled();

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      className={cn(
        "fixed p-3 bg-yellow-400 rounded-full bottom-14 right-6 transition-opacity z-50 hover:text-white focus:text-white shadow-xl duration-500",
        {
          ["opacity-0 invisible"]: !isScrolled,
        }
      )}
    >
      <ArrowBigUp />
      <span className="sr-only">scroll to top</span>
    </button>
  );
}

export default ScrollToTopBtn;
