import useIsScrolled from "@/hooks/useIsScrolled";
import Logo from "./Logo";
import NavContent from "./NavContent";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

function Navbar() {
  const isScrolled = useIsScrolled();
  const location = useLocation();
  const isInfiniteScroll =
    location.pathname === "/tv" ||
    location.pathname === "/movie" ||
    location.pathname.includes("/search") ||
    location.pathname.includes("/genres/");

  return (
    <header>
      <nav
        className={`flex items-center justify-between px-4 py-6 bg-yellow-400 md:px-12`}
      >
        <Logo />
        <NavContent />
      </nav>

      {isInfiniteScroll && (
        <nav
          className={cn(
            "fixed top-0 w-full px-4 py-6 bg-yellow-400 transition-all duration-500 md:px-12 z-50 invisible opacity-0 flex items-center justify-between",
            {
              ["visible opacity-100"]: isScrolled && isInfiniteScroll,
            }
          )}
        >
          <Logo />
          <NavContent />
        </nav>
      )}
    </header>
  );
}

export default Navbar;
