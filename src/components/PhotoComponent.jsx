import React from "react";
import "./PhotoComponent.css";

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
