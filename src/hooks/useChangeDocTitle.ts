import { useEffect } from "react";

function useChangeDocTitle(data: any) {
  useEffect(() => {
    if (data) {
      document.title = `${data.name || data.title} - ScreenSaga`;
    }
    return () => {
      document.title = "ScreenSaga";
    };
  }, [data]);
}

export default useChangeDocTitle;
