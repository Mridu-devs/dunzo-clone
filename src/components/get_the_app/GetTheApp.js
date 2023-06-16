import React from "react";
import "./getTheApp.scss";
import Image from "../../assets/Image";
import applestore from "../../assets/Images/applestore.svg";
import playstore from "../../assets/Images/playstore-image.svg";

export default function GetTheApp() {
  return (
    <div className="getTheApp">
      <div className="container">
        <div className="left">
          <img src={Image.mobile} className="mobileImage" />
        </div>
        <div className="right">
          <h4 className="heading">
            All this from the convenience of your phone. <br />
            <p className="para"> Download the Dunzo mobile app. </p>
          </h4>

          <img src={playstore} />
          <img src={applestore} />
        </div>
      </div>
    </div>
  );
}
