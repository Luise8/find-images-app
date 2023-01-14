import React, { useRef } from "react";
import useCuratedImages from "hooks/use-curated-images";
import Loading from "components/loading";
import List from "components/list";

export default function Home() {
  const elementRef = useRef();
  const { images, loading } = useCuratedImages(elementRef);

  return (
    <div className="home">
      {loading === true ? (
        <Loading></Loading>
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
