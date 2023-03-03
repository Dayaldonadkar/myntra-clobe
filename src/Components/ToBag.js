import React, { Component } from "react";

export default class ToBag extends Component {
  images = [
    {
      id: 1,
      url: "https://bit.ly/3DnfTst",
    },
    {
      id: 2,
      url: "https://bit.ly/3uB2WHQ",
    },
    {
      id: 3,
      url: "https://bit.ly/3NvrZEB",
    },
    {
      id: 4,
      url: "https://bit.ly/3JP1BmV",
    },
    {
      id: 5,
      url: "https://bit.ly/3Nt0VG5",
    },
    {
      id: 6,
      url: "https://bit.ly/3uEEhC2",
    },
  ];
  constructor() {
    super();
    this.state = { images: this.images };
  }
  render() {
    return (
      <div>
        <h1 className="text-4xl font-medium pt-40 pb-10 px-10">
          CATEGORIES TO BAG
        </h1>

        <div className="flex px-20">
          {this.state.images.map((item) => {
            return (
              <div>
                <img className="w-10/12" src={item.url} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
