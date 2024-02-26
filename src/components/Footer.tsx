import { Facebook, Instagram, Twitter } from "lucide-react";
import SmallLogo from "./SmallLogo";

const CompanyLinks = [
  "About",
  "Articles",
  "Careers",
  "Privacy Policy",
  "Terms",
];

const UsefulLinks = ["Support", "Contact"];

const FollowUsLink = [
  <Facebook className="md:size-8" />,
  <Instagram className="md:size-8" />,
  <Twitter className="md:size-8" />,
];

function Footer() {
  return (
    <footer>
      <div className="flex items-start justify-center gap-5 py-10 pl-3 text-sm text-white bg-black sm:px-12 xl:px-20 ">
        <div className="flex-1 hidden md:flex md:justify-start lg:h-[250px] md:h-[200px] md:items-center">
          <SmallLogo />
        </div>

        <div className="flex-1">
          <h5 className="mb-4 text-sm text-yellow-400 uppercase md:text-base md:mb-6">
            Company
          </h5>
          <ul className="space-y-5 text-sm font-semibold md:text-lg lg:space-y-6">
            {CompanyLinks.map((link) => (
              <li key={link} className="cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <h5 className="mb-4 text-sm text-yellow-400 uppercase md:text-base md:mb-6">
            Useful Links
          </h5>
          <ul className="space-y-5 text-sm font-semibold md:text-lg lg:space-y-6">
            {UsefulLinks.map((link) => (
              <li key={link} className="cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center flex-1 sm:items-start">
          <h5 className="mb-4 text-sm text-yellow-400 uppercase md:text-base md:mb-6">
            Follow Us
          </h5>
          <ul className="flex flex-col items-center gap-5 text-sm font-semibold md:flex-row md:gap-8">
            {FollowUsLink.map((link, index) => (
              <li key={index} className="cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-4 text-sm tracking-widest text-center text-black bg-yellow-400">
        <p>© 2024 MovieApp</p>
      </div>
    </footer>
  );
}

export default Footer;
