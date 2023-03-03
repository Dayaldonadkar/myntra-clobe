import React, { Component } from "react";

export default class Trending extends Component {
  images = [
    {
      id: 1,
      url: "https://bit.ly/3uB3jlE",
    },
    {
      id: 2,
      url: "https://bit.ly/3Dmujct",
    },
    {
      id: 3,
      url: "https://bit.ly/3JS3pvv",
    },
    {
      id: 4,
      url: "https://bit.ly/3uELKRA",
    },
    {
      id: 5,
      url: "https://bit.ly/3tMDnEk",
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
      <div>
        <h1 className="text-4xl pt-28 pb-10 px-10 font-medium">
          TRENDING IN INDIAN WEAR
        </h1>
        <div className="flex justify-center">
          <div className="flex w-11/12">
            {this.state.images.map((item) => {
              return (
                <div>
                  <img className="w-10/12" src={item.url} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
