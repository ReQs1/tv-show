import { useEffect } from "react";

function useChangeDocTitle(data: any) {
  useEffect(() => {
    if (data) {
      document.title = `${data.name || data.title} - TV-Show`;
    }
    return () => {
      document.title = "TV-Show";
    };
  }, [data]);
}

export default useChangeDocTitle;
