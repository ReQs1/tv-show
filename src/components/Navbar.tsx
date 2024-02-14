import Logo from "./Logo";
import NavContent from "./NavContent";

function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between px-4 py-6 bg-yellow-300 md:px-12 ">
        <Logo />
        <NavContent />
      </nav>
    </header>
  );
}

export default Navbar;
