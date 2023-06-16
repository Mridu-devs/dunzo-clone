import React from "react";
import "./banner.scss";
import Image from "../../assets/Image";

export default function Banner() {
  return (
    <div className="banner">
      <img src={Image.karishma} alt="Advertise" />
    </div>
  );
}
