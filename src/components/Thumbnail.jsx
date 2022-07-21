import React from "react";
import Thumbnails from "../assets/images/thumbnails";

const Thumbnail = ({ thumbnailId, displayedImage, setDisplayedImage, carousel }) => {
  const handleThumbnailClick = (thumbnail) => {
    return () => {
      setDisplayedImage(thumbnail);
    };
  };

  return (
    <div onClick={handleThumbnailClick(thumbnailId)} className={`relative ${carousel ? "w-20 h-20" : "md:w-[3.75rem] md:h-[3.75rem] dd:w-20 dd:h-20"} rounded-xl overflow-hidden`}>
      <div className={`${displayedImage === thumbnailId ? "border-orange" : " opacity-0 border-transparent"} border-2 border-solid  rounded-xl hover:opacity-100 cursor-pointer transition-all absolute inset-0 h-full w-full bg-transparent-white`}>
      </div>
      <img 
        id={"thumbnail-" + thumbnailId}
        src={Thumbnails[thumbnailId]}
        alt=""
        className={`${displayedImage === thumbnailId ? "" : ""} thumbnail-image  transition-opacity`}
        
      />
    </div>
  );
};

export default Thumbnail;
