import { Facebook, Instagram, Twitter } from "lucide-react";
import SmallLogo from "./SmallLogo";
import FooterCol from "./FooterCol";

function Footer() {
  return (
    <footer>
      <div className="flex items-start justify-center gap-5 py-10 pl-3 text-sm text-white bg-black sm:px-12 xl:px-20 ">
        <div className="flex-1 hidden md:flex md:justify-start lg:h-[250px] md:h-[200px] md:items-center">
          <SmallLogo />
        </div>

        <FooterCol
          title="Company"
          links={["About", "Articles", "Careers", "Privacy Policy", "Terms"]}
        />

        <FooterCol title="Useful Links" links={["Support", "Contact"]} />

        <FooterCol
          title="Follow Us"
          links={[
            <Facebook className="md:size-8" />,
            <Instagram className="md:size-8" />,
            <Twitter className="md:size-8" />,
          ]}
          variant="socials"
        />
      </div>

      <div className="py-4 text-sm tracking-widest text-center text-black bg-yellow-400">
        <p>© 2024 MovieApp</p>
      </div>
    </footer>
  );
}

export default Footer;
