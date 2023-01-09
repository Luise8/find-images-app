import React from "react";
import List from "components/list";
import useImages from "hooks/use-images";
import { useParams } from "react-router-dom";

export default function SearchResult() {
  const { keyword } = useParams();

  const { images, loading, pageResult } = useImages(keyword);

  return (
    <div>
      Result
      {loading === true ? (
        "Loading" /* component spinner loading */
      ) : images.length === 0 || images === [] || images === undefined ? (
        "There are no results. Make a new search"
      ) : (
        <List images={images}></List>
      )}
    </div>
  );
}
