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
      <div className="hidden mt-8 md:block md:max-w-[600px] md:max-h-32 overflow-auto">
        <p className="text-lg">{overview}</p>
      </div>
    );
}

export default OverviewComponent;
