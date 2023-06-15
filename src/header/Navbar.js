import React from "react";
import "./navbar.scss";
import Image from "../assets/Image";
import { IoLocationSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="sub-container">
        <img src={Image.dunzoLetterLogo} className="nav-img" />
        <div className="df ac">
          <IoLocationSharp color="rgb(0, 179, 122)" size={20} />
          <span>Nayanappana Halli,3rd ...</span>
          <AiOutlineDown color="rgb(0, 179, 122)" size={20} />
        </div>
        <span className="hovergreen">Dunzo for Partners</span>
        <div className="df ac hovergreen">
          <span>Business with Dunzo</span>
          <AiOutlineDown size={20} className="hovergreen" />
        </div>
        <div className="df fc jc ac hovergreen">
          <FiSearch size={20} />
          <span>Search</span>
        </div>
        <div className="df fc jc ac hovergreen">
          <BsCart size={20} className="icon" />
          <span>Cart</span>
        </div>
        <button className="signin-button">Sign in</button>
      </div>
    </div>
  );
}
