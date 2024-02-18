import { ArrowBigUp } from "lucide-react";

function ScrollToTopBtn() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      className="fixed p-3 bg-yellow-400 rounded-full bottom-6 right-6"
    >
      <ArrowBigUp />
      <span className="sr-only">scroll to top</span>
    </button>
  );
}

export default ScrollToTopBtn;
