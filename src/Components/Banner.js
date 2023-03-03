import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class Banner extends Component {
  render() {
    return (
      <Carousel
        showThumbs={false}
        showIndicators={true}
        swipeable={true}
        autoPlay={true}
        infiniteLoop={true}
        transitionTime={1000}
      >
        <div>
          <img src="https://bit.ly/3qJmvfK" />
        </div>
        <div>
          <img src="https://bit.ly/3NxptOo" />
        </div>
        <div>
          <img src="https://bit.ly/3NqqqYR" />
        </div>
      </Carousel>
    );
  }
}
