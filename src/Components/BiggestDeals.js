import React, { Component } from "react";

export default class BiggestDeals extends Component {
  images = [
    {
      id: 1,
      url: "https://bit.ly/3JRzkMK",
    },
    {
      id: 2,
      url: "https://bit.ly/3IMN36c",
    },
    {
      id: 3,
      url: "https://bit.ly/370ZT3C",
    },
    {
      id: 4,
      url: "https://bit.ly/3NsYyDb",
    },
    {
      id: 5,
      url: "https://bit.ly/3wM9hTp",
    },
    {
      id: 6,
      url: "https://bit.ly/3JNVFe3",
    },
    {
      id: 7,
      url: "https://bit.ly/3Dkomg5",
    },
    {
      id: 8,
      url: "https://bit.ly/36HmamW",
    },
  ];
  constructor() {
    super();
    this.state = {
      images: this.images,
    };
  }

  render() {
    return (
      <>
        <h1 className="font-medium text-4xl pt-28 pb-10 px-11">
          BIGGEST DEALS ON TOP BRANDS
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 w-11/12 gap-y-5">
            {this.state.images.map((item) => {
              return (
                <div className="">
                  <img src={item.url} />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
