import React from "react";
import List from "components/list";
import useImages from "hooks/use-images";
import { useParams } from "react-router-dom";
import { useRef, useEffect } from "react";

export default function SearchResult() {
  const elementRef = useRef();
  const { keyword } = useParams();

  const { images, loading, pageResult, page } = useImages({
    keyword,
    elementRef,
  });
  useEffect(() => {
    console.log("renderizado search");
  });

  return (
    <div>
      {loading === true ? (
        "Loading" /* component spinner loading */
      ) : images.length === 0 || images === [] || images === undefined ? (
        "There are no results. Make a new search"
      ) : (
        <>
          <div>Results: {pageResult.total_results}</div>
          <List images={images}></List>
          <div ref={elementRef}></div>
        </>
      )}
    </div>
  );
}
