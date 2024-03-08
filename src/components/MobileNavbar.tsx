import { motion } from "framer-motion";
import { X } from "lucide-react";

import Logo from "./Logo";
import NavLinks from "./NavLinks";

import { useOutsideClick } from "../hooks/useOutsideClick";
import React from "react";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function MobileNavbar({ setIsOpen }: Props) {
  const ref = useOutsideClick(() => setIsOpen(false));

  return (
    <motion.div
      className="absolute top-0 left-0 z-50 flex flex-col items-center w-screen gap-12 py-10 bg-yellow-400 xl:hidden"
      transition={{ duration: 0.3 }}
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      exit={{ x: 500 }}
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <button
        className="absolute right-4 top-6 md:right-12"
        onClick={() => setIsOpen(false)}
      >
        <X size={36} />
        <span className="sr-only">Close mobile navbar</span>
      </button>
      <Logo setIsOpen={setIsOpen} />
      <NavLinks setIsOpen={setIsOpen} />
    </motion.div>
  );
}

export default MobileNavbar;
