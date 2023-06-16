import React from "react";
import "./toppicks.scss";
import Image from "../../assets/Image";

export default function TopPicks() {
  const cardData = [
    { picture: Image.getBizzy },
    { picture: Image.shelfLove },
    { picture: Image.biteOnTime },
    { picture: Image.moveIt },
  ];
  return (
    <div className="toppicks">
      <div className="container">
        <h2>Top picks for you</h2>
        <div className="images-container">
          {cardData.map((item) => {
            return <img src={item.picture} className="bigcard" />;
          })}
        </div>
      </div>
    </div>
  );
}
