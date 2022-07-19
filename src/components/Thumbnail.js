import React from "react";
import Thumbnails from "../assets/images/thumbnails";

const Thumbnail = ({ id, displayedImage, setDisplayedImage }) => {
  const handleThumbnailClick = (thumbnail) => {
    return () => {
      setDisplayedImage(thumbnail);
    };
  };

  return (
    <img
      id={"thumbnail-" + id}
      src={Thumbnails[id]}
      alt=""
      className={` ${displayedImage === id ? "border-2 opacity-50 box-border" : ""} cursor-pointer rounded-xl sm:hover:opacity-50 md:w-[3.75rem] md:h-[3.75rem]  dd:w-20 dd:h-20  border-orange sm:hover:border-solid transition all`}
      onClick={handleThumbnailClick(id)}
    />
  );
};

export default Thumbnail;
