import React, { useCallback, useEffect, useRef } from "react";
import throttle from "just-throttle";

export default function useInfinityScroll({ elementRef, setPage, pageResult }) {
  const handleNextPage = useCallback(
    throttle(
      () => {
        setPage((prevPage) => prevPage + 1);
        console.log("intersection");
      },
      2000,
      { leading: true }
    ),
    []
  );

  useEffect(() => {
    let observer;
    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        if (pageResult.per_page * pageResult.page < pageResult.total_results) {
          handleNextPage();
        }
      }
    };

    observer = new IntersectionObserver(onChange, {
      rootMargin: "50px",
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer && observer.disconnect();
  });
  return null;
}
