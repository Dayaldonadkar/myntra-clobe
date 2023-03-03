import React, { Component } from "react";
import Banner from "./Components/Banner";
import BiggestDeals from "./Components/BiggestDeals";
import Explore from "./Components/Explore";
import Luxe from "./Components/Luxe";
import ToBag from "./Components/ToBag";
import Trending from "./Components/Trending";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Banner />
        <BiggestDeals />
        <ToBag />
        <Explore />
        <Luxe />
        <Trending />
      </div>
    );
  }
}
