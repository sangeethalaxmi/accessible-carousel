import { useEffect } from "react";

const useArrowNavigation = (goBack, goNext, prevRef, nextRef) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft" && e.target?.dataset.id === "prev") goBack();
      if (e.key === "ArrowRight" && e.target?.dataset.id === "next") goNext();
    };

    const prevBtn = prevRef?.current;
    const nextBtn = nextRef?.current;

    prevBtn?.addEventListener("keydown", handleKeyDown);
    nextBtn?.addEventListener("keydown", handleKeyDown);

    return () => {
      prevBtn?.removeEventListener("keydown", handleKeyDown);
      nextBtn?.removeEventListener("keydown", handleKeyDown);
    };
  }, [goBack, goNext, prevRef, nextRef]);
};
export default useArrowNavigation;
