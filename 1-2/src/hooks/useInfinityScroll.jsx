import { useCallback, useEffect, useRef } from "react";
import { useContext } from "react";
import { ListContext } from "../contexts/ListContext";

const useInfinityScroll = () => {
  const { isLoading, isEndData, handleNextPage } = useContext(ListContext);
  const obsRef = useRef(null);
  const handleObs = useCallback(
    (entries) => {
      const target = entries[0];

      if (!isLoading && !isEndData && target.isIntersecting) {
        handleNextPage((prev) => prev + 1);
      }
    },
    [isLoading, isEndData, handleNextPage]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObs, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);

    return () => {
      observer.disconnect();
    };
  }, [obsRef, handleObs]);

  return { obsRef };
};

export default useInfinityScroll;
