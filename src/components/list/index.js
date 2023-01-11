import React from "react";

function ListItem({ id, alt, photographer, srcImg, urlWebOrigin }) {
  return (
    <figure className="item">
      <a
        className="item__link"
        href={urlWebOrigin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="item__img" src={srcImg} alt={alt} />
        <figcaption className="item__photographer">
          {photographer} {id}
        </figcaption>
      </a>
    </figure>
  );
}

export default function List({ images }) {
  return (
    <div className="lists">
      {images.map((image) => {
        return (
          <ListItem
            id={image.id}
            alt={image.alt}
            photographer={image.photographer}
            srcImg={image.src.medium}
            urlWebOrigin={image.url}
            key={image.id}
          ></ListItem>
        );
      })}
    </div>
  );
}
