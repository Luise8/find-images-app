import React, { useEffect, useRef } from "react";
import useCuratedImages from "hooks/use-curated-images";
import Loading from "components/loading";
import List from "components/list";

export default function Home() {
  const elementRef = useRef();
  const { images, loading, pageResult, setPageResult, setPage, page } =
    useCuratedImages(elementRef);

  return (
    <div>
      home
      {loading === true ? (
        <Loading></Loading>
      ) : images.length === 0 || images === [] || images === undefined ? (
        "There are no results. Reload the page."
      ) : (
        <>
          <List images={images}></List>
          <div ref={elementRef}></div>
          <Loading></Loading>
        </>
      )}
    </div>
  );
}
