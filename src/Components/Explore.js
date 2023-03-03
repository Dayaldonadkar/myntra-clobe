import React, { Component } from "react";

export default class Explore extends Component {
  images = [
    {
      id: 1,
      url: "https://bit.ly/3wTrgam",
    },
    {
      id: 2,
      url: "https://bit.ly/3Ln7fx1",
    },
    {
      id: 3,
      url: "https://bit.ly/3wKizze",
    },
    {
      id: 4,
      url: "https://bit.ly/3iLkgUQ",
    },
    {
      id: 5,
      url: "https://bit.ly/3Nt0VG5",
    },
    {
      id: 6,
      url: "https://bit.ly/3uzcDX3",
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
        <h1 className="text-4xl text-medium pt-28 pb-10 px-10">
          EXPLORE TOP BRANDS
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
