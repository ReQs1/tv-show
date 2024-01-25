import Logo from "./Logo";
import NavContent from "./NavContent";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-12 py-6 bg-yellow-300 ">
      <Logo />
      <NavContent />
    </nav>
  );
}

export default Navbar;
