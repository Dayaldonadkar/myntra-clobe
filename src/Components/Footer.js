import React, { Component } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default class Footer extends Component {
  render() {
    return (
      <div className="flex justify-center py-28 bg-[#FAFBFC]">
        <div className="flex w-9/12 justify-between">
          <div className="space-x-1 space-y-1">
            <h1 className="text-lg">ONLINE SHOPPING</h1>
            <p>Men</p>
            <p>Women</p>
            <p>Kids</p>
            <p>Home & Living</p>
            <p>Beauty</p>
            <p>Gift Cards</p>
            <p>Myntra Insider</p>
          </div>

          <div className="space-x-1 space-y-1">
            <h1 className="text-xl">Contact US</h1>

            <p>FAQ</p>
            <p>T&C</p>
            <p>Terms of use</p>
            <p>Track Orders</p>
            <p>Shipping</p>
            <p>Cancellation</p>
            <p>Returns</p>
            <p>Privacy Policy</p>
            <p>Greivance officer</p>
          </div>

          <div className="space-y-6">
            <h1 className="text-xl">EXPERIENCE MYNTRA APP ON MOBILE</h1>
            <div className="flex gap-x-3">
              <img className="h-14" src="https://bit.ly/3LluZ4L" alt="" />
              <img className="h-14" src="https://bit.ly/3DmWQys" alt="" />
            </div>
            <div>
              <h1>KEEP IN Touch</h1>
              <div className="flex">
                <FacebookIcon />
                <TwitterIcon />
                <YouTubeIcon />
                <InstagramIcon />
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex">
              <img className="w-16 h-14" src="https://bit.ly/3JPiL47" alt="" />
              <h1 className="space-x-2">
                <p className="text-xl">100% ORIGINAL</p>
                <span>gurante for all products at myntra.com</span>
              </h1>
              <p></p>
            </div>

            <div className="flex ">
              <img
                className="w-16 h-14"
                src="https://bit.ly/3uBalH4"
                alt=""
              ></img>
              <h1 className="space-x-2">
                <span className="text-xl">Return within 30days</span>
                <span>of receiving order</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
