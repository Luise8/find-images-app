import React from "react";
import Masonry from "@mui/lab/Masonry";

function ListItem({ id, alt, photographer, srcImg, urlWebOrigin }) {
  return (
    <figure
      className="item"
      style={{
        backgroundColor: "#555",
      }}
    >
      <a
        className="item__link"
        href={urlWebOrigin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="item__img"
          src={`${srcImg}?w=210&auto=format`}
          srcSet={`${srcImg}?w=210&auto=format&dpr=2 2x`}
          alt={alt}
          loading="lazy"
          style={{
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            display: "block",
            width: "100%",
          }}
        />
        <figcaption className="item__photographer">{photographer}</figcaption>
      </a>
    </figure>
  );
}

export default function List({ images }) {
  return (
    <div
      className="lists"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="conatiner-list"
        style={{
          padding: "30px",
          width: "900px",
          minHeight: "829px",
          backgroundColor: "#eee",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Masonry columns={3} spacing={2}>
          {images.map((image) => {
            return (
              <ListItem
                //sx={{ width: "200px" }}
                id={image.id}
                alt={image.alt}
                photographer={image.photographer}
                srcImg={image.src.original}
                urlWebOrigin={image.url}
                key={image.id}
              ></ListItem>
            );
          })}
        </Masonry>
      </div>
    </div>
  );
}
