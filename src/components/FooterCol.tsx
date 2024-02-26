type Props = {
  title: string;
  links: any[];
  variant?: string;
};

function FooterCol({ title, links, variant }: Props) {
  if (variant === "socials")
    return (
      <div className="flex flex-col items-center flex-1 sm:items-start">
        <h5 className="mb-4 text-sm text-yellow-400 uppercase md:text-base md:mb-6">
          Follow Us
        </h5>
        <ul className="flex flex-col items-center gap-5 text-sm font-semibold md:flex-row md:gap-8">
          {links.map((link, index) => (
            <li key={index} className="cursor-pointer">
              {link}
            </li>
          ))}
        </ul>
      </div>
    );

  return (
    <div className="flex-1">
      <h5 className="mb-4 text-sm text-yellow-400 uppercase md:text-base md:mb-6">
        {title}
      </h5>
      <ul className="space-y-5 text-sm font-semibold md:text-lg lg:space-y-6">
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
