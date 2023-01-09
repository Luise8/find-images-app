import React from "react";
import useCuratedImages from "hooks/use-curated-images";
import List from "components/list";

export default function Home() {
  const { images, loading, pageResult } = useCuratedImages();
  return (
    <div>
      home
      {loading === true ? (
        "Loading" /* component spinner loading */
      ) : images.length === 0 || images === [] || images === undefined ? (
        "There are no results. Reload the page."
      ) : (
        <List images={images}></List>
      )}
    </div>
  );
}
