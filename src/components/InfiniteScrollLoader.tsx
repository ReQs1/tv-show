import { Skeleton } from "./skeleton";

function InfiniteScrollLoader() {
  return Array(20)
    .fill(0)
    .map((_, i) => {
      return (
        <div
          className="flex flex-col flex-1 space-y-2 basis-48 lg:max-w-[200px]"
          key={i}
        >
          <Skeleton className="h-[288px] w-[100%]" />
          <Skeleton className="h-[30px] w-[100%]" />
        </div>
      );
    });
}

export default InfiniteScrollLoader;
