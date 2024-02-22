import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Menu, X } from "lucide-react";
import Navigation from "./Navigation";
import Logo from "./Logo";

import { useOutsideClick } from "../hooks/useOutsideClick";

function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

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
        {isOpen && (
          <motion.div
            className="absolute top-0 left-0 flex flex-col items-center w-screen gap-10 py-12 bg-yellow-400 md:hidden"
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={ref}
          >
            <button
              className="absolute right-4 top-6"
              onClick={() => setIsOpen(false)}
            >
              <X size={36} />
              <span className="sr-only">Close mobile navbar</span>
            </button>
            <Logo />
            <Navigation setIsOpen={setIsOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavLinks;
