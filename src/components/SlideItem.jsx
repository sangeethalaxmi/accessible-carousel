import React from "react";

const SlideItem = ({ image, index, current }) => {
  return (
    <div
      key={index}
      className={current === index ? "active" : "border border-transparent"}
      aria-hidden={current !== index}
      tabIndex={current === index ? 0 : -1}
    >
      <img src={image.url} alt={image.alt} className="w-full h-auto" />
    </div>
  );
};

export default SlideItem;
