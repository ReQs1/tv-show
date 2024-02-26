import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

import Navigation from "./Navigation";
import MobileNavbar from "./MobileNavbar";

function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <div className="w-3/5 xl:w-2/3">
        <div className="items-center flex-grow hidden gap-6 md:flex md:justify-between ">
          <Navigation />
        </div>

        <div className="flex items-center justify-end cursor-pointer md:hidden">
          <button onClick={toggleNavBar}>
            <Menu size={36} />
            <span className="sr-only">Open mobile navbar</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && <MobileNavbar setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </>
  );
}

export default NavLinks;
