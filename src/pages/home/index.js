import React from "react";
import Header from "components/header";
import useCuratedImages from "hooks/use-curated-images";

export default function Home() {
  const { images, loading, pageResult } = useCuratedImages();
  return (
    <div>
      home
      {loading == true ? (
        "Loading" /* component spinner loading */
      ) : images.length === 0 || images === [] || images === undefined ? (
        "There are no results. Reload the page."
      ) : (
        <img src={images[1].src.small} alt="" /> /* List */
      )}
    </div>
  );
}
