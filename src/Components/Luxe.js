import React, { Component } from "react";

export default class Luxe extends Component {
  images = [
    {
      id: 1,
      url: "https://bit.ly/3NxSRUs",
    },
    {
      id: 2,
      url: "https://bit.ly/36DkXwX",
    },
    {
      id: 3,
      url: "https://bit.ly/3Diiowi",
    },
    {
      id: 4,
      url: "https://bit.ly/3Nu4j3y",
    },
    {
      id: 5,
      url: "https://bit.ly/3DkgEm6",
    },
    {
      id: 6,
      url: "https://bit.ly/3NG3TY6",
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
        <h1 className="text-4xl font-medium pt-28 pb-10 px-10">MYNTRA LUXE</h1>
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
