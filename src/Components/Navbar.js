import React, { Component } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="flex justify-around gap-4">
        <div>
          <img
            className="h-28"
            src="https://rad-manatee-0e439b.netlify.app/Common%20Files/image/myntra-removebg-preview.png"
            alt="logo"
          />
        </div>

        <div className="flex gap-x-7 items-center text-sm">
          <h1>MEN</h1>
          <h1>WOMEN</h1>
          <h1>KIDS</h1>
          <h1>HOME & LIVING</h1>
          <h1>BEAUTY</h1>
          <h1>STUDIO</h1>
        </div>

        <div className="flex items-center">
          <SearchIcon
            fontSize="large"
            className="bg-[#E7DDD9] py-2 rounded-l-lg"
          />
          <input
            className="bg-[#E7DDD9] w-11/12 rounded-r-lg h-[35px] placeholder:text-black placeholder:text-xs"
            type="text"
            placeholder="Search for products,brands"
          />
        </div>

        <div className="flex items-center justify-center gap-7">
          <div className="flex flex-col items-center">
            <Link to="login">
              <PersonOutlineIcon />

              <h1>Login</h1>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <FavoriteBorderIcon />
            <h1>Wishlist</h1>
          </div>
          <div className="flex flex-col items-center">
            <ShoppingBasketIcon />
            <h1>Bag</h1>
          </div>
        </div>
      </div>
    );
  }
}
