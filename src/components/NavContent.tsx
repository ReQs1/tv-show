import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

import NavLinks from "./NavLinks";
import MobileNavbar from "./MobileNavbar";

function NavContent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <div className="flex-grow-[2]">
        <div className="items-center flex-grow hidden gap-6 xl:flex xl:justify-between ">
          <NavLinks />
        </div>

        <div className="flex items-center justify-end cursor-pointer xl:hidden">
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

export default NavContent;
