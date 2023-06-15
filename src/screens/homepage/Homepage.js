import React from "react";
import "./homepage.scss";
import { BiChevronRight } from "react-icons/bi";
import Image from "../../assets/Image";

export default function Homepage() {
  return (
    <div className="header df ac jc">
      <div className="container">
        <div className="left">
          <img src={Image.panImg} className="pan-img" />
          <span>
            Order Paan items, munchies and much more on our new Dunzo Mo app
          </span>
        </div>
        <div className="right">
          <span>Download Dunzo Mo app now</span>{" "}
          <BiChevronRight color="rgb(0, 179, 122)" size={20} />
        </div>
      </div>
    </div>
  );
}
