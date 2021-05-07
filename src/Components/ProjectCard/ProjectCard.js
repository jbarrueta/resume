import React, { useState } from "react";
import "./ProjectCard.css";

export default function ProjectCard({
  image,
  gif,
  title,
  description,
  onClickHandler,
  className,
}) {
  const [img, setImg] = useState(image);
  return (
    <div
      className={`serviceCard br3 shadow-5 grow pointer ${className}`}
      onClick={onClickHandler}
      onMouseEnter={() => setImg(gif)}
      onMouseLeave={() => setTimeout(() => setImg(image), 5000)}
    >
      <img src={img} alt="serviceGIF" height="300px" />
      <div className="cardFilter"></div>
      <div className="serviceTitle center f4">{title}</div>
      <div className="serviceDescription center pa3 tc white-70">
        {description}
      </div>
    </div>
  );
}
