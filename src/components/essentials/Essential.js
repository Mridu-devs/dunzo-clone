import React from "react";
import "./essential.scss";
import Image from "../../assets/Image";

export default function Essential() {
  const bigcardImages = [
    Image.grocceryAndEssentials,
    Image.pickupAndDrop,
    Image.restaurants,
    Image.fruitsAndVegetables,
  ];
  const smallcards = [
    { picture: Image.meatAndFish, description: "Meat and Fish" },
    { picture: Image.petSupplies, description: "Pet Supplies" },
    { picture: Image.panSmallCardImage, description: "Paan Shop" },
  ];

  return (
    <div className="essential">
      <div className="container">
        <h2>Essentials delivered to your doorstep</h2>
        <div className="images-container">
          {bigcardImages.map((item) => {
            return <img src={item} className="bigcard" />;
          })}
        </div>
        <div className="smallcards-container">
          {smallcards.map((item) => {
            return (
              <div className="smallCard">
                <img src={item.picture} className="smallCardImage" />
                <span>{item.description}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
