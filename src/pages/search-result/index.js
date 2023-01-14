// SearchResult page

import React from "react";
import List from "components/list";
import useImages from "hooks/use-images";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import Loading from "components/loading";
import "pages/search-result/styles.scss";

export default function SearchResult() {
  const elementRef = useRef();
  const { keyword } = useParams();

  const { images, loading, pageResult } = useImages({
    keyword,
    elementRef,
  });

  return (
    <div className="search-result">
      {loading === true ? (
        <Loading></Loading>
      ) : images.length === 0 || images === [] || images === undefined ? (
        <div className="search-result__container-quantity">
          <h2 className="search-result__quantity-title">
            There are no results. Make a new search
          </h2>
        </div>
      ) : (
        <>
          <div className="search-result__container-quantity">
            <h2 className="search-result__quantity-title">
              Results: {pageResult.total_results}
            </h2>
          </div>
          <List images={images}></List>
          <div ref={elementRef}></div>
          <Loading></Loading>
        </>
      )}
    </div>
  );
}
