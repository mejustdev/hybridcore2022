import React from "react";
import { imageBuilder } from "../lib/sanity";

const MainImage = ({ mainImage, width = 1200 }) => {
  const imgUrl =
    mainImage &&
    imageBuilder(mainImage)
      .width(width)
      .height(Math.floor((9 / 16) * width))
      .fit("crop")
      .auto("format")
      .url();

  return imgUrl ? <img src={imgUrl} alt={mainImage.alt || ""} /> : <></>;
};

export default MainImage;