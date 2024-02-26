import { cn } from "@/lib/utils";

type Props = {
  title: string;
  links: any[];
  variant?: string;
};

function FooterCol({ title, links, variant }: Props) {
  return (
    <div
      className={cn("flex-1", {
        ["flex flex-col items-center flex-1 sm:items-start"]:
          variant === "socials",
      })}
    >
      <h5 className="mb-4 text-sm text-yellow-400 uppercase md:text-base md:mb-6">
        {title}
      </h5>
      <ul
        className={cn("text-sm", {
          ["flex flex-col items-center gap-5 font-semibold md:flex-row md:gap-8"]:
            variant === "socials",
          ["space-y-5 font-semibold md:text-lg lg:space-y-6"]:
            variant !== "socials",
        })}
      >
        {links.map((link, index) => (
          <li key={index} className="cursor-pointer">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterCol;
