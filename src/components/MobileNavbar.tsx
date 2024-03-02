import { motion } from "framer-motion";
import { X } from "lucide-react";
import Logo from "./Logo";
import { useOutsideClick } from "../hooks/useOutsideClick";
import Navigation from "./Navigation";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function MobileNavbar({ setIsOpen }: Props) {
  const ref = useOutsideClick(() => setIsOpen(false));

  return (
    <motion.div
      className="absolute top-0 left-0 flex flex-col items-center w-screen gap-10 py-12 bg-yellow-400 xl:hidden"
      transition={{ duration: 0.3 }}
      initial={{ y: -400 }}
      animate={{ y: 0 }}
      exit={{ y: -400 }}
      ref={ref}
    >
      <button
        className="absolute right-4 top-6"
        onClick={() => setIsOpen(false)}
      >
        <X size={36} />
        <span className="sr-only">Close mobile navbar</span>
      </button>
      <Logo setIsOpen={setIsOpen} />
      <Navigation setIsOpen={setIsOpen} />
    </motion.div>
  );
}

export default MobileNavbar;
