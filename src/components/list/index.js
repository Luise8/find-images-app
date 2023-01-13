import React from "react";
import Masonry from "@mui/lab/Masonry";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import "components/list/styles.css";

const theme = createTheme({
  spacing: 16,
});

function ListItem({
  id,
  alt,
  photographer,
  srcImg,
  urlWebOrigin,
  heightImg,
  widthtImg,
}) {
  return (
    <figure
      className="item"
      style={{
        position: "relative",
        aspectRatio: widthtImg / heightImg,
        backgroundColor: "rgba(0,0,0,0.0)",

        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
      }}
    >
      <a
        className="item__link"
        href={urlWebOrigin}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          width: "100%",
          top: "0",
          bottom: "1px",
          backgroundColor: "red",
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
        }}
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
        className="lists__masonry-container"
        style={{
          padding: "30px",
          width: "950px",
          minHeight: "829px",
          backgroundColor: "#eee",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <ThemeProvider theme={theme}>
          <Masonry columns={3} spacing={1}>
            {images.map((image) => {
              return (
                <ListItem
                  id={image.id}
                  alt={image.alt}
                  photographer={image.photographer}
                  srcImg={image.src.original}
                  urlWebOrigin={image.url}
                  key={image.id}
                  heightImg={image.height}
                  widthtImg={image.width}
                ></ListItem>
              );
            })}
          </Masonry>
        </ThemeProvider>
      </div>
    </div>
  );
}
