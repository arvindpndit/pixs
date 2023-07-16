import React from "react";
import "./PhotoComponent.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const PhotoComponent = ({ photo }) => {
  const { user, urls } = photo;
  return (
    <div>
      <img className="img" src={urls.regular} />
      <a
        className="credit"
        target="_blank"
        href={`https://unsplash.com/@${user.username}`}
      >
        {user.name}
      </a>
    </div>
  );
};

export default PhotoComponent;
