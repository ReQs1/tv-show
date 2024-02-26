type Props = {
  overview: string;
  variant: "mobile" | "desktop";
};

function OverviewComponent({ overview, variant }: Props) {
  if (variant === "mobile")
    return (
      <div className="block mt-10 text-base sm:text-lg md:hidden">
        <p>{overview}</p>
      </div>
    );

  if (variant === "desktop")
    return (
      <div className="hidden mt-8 md:block md:max-w-[550px] md:max-h-48">
        <p className="overflow-auto text-lg">{overview}</p>
      </div>
    );
}

export default OverviewComponent;
