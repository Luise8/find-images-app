import React from "react";
import Masonry from "@mui/lab/Masonry";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import "components/list/styles.scss";

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
        aspectRatio: widthtImg / heightImg,
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
          src={`${srcImg}?w=415&auto=format`}
          srcSet={`${srcImg}?w=415&auto=format&dpr=2 2x`}
          alt={alt}
          loading="lazy"
        />

        <figcaption className="item__photographer">{photographer}</figcaption>
      </a>
    </figure>
  );
}

export default function List({ images }) {
  return (
    <div className="lists">
      <div className="lists__masonry-container">
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
