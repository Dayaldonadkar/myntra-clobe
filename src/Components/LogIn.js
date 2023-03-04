import React, { Component } from "react";

export default class LogIn extends Component {
  render() {
    return (
      <div className="flex justify-center bg-[#fcedf2] h-screen">
        <div className="bg-white pb-10 h-2/3">
          <img className="w-96" src="https://bit.ly/3tV4k8R" alt="" />
          <div className="px-5 pt-10">
            <h2 className="text-3xl pb-5">Login</h2>
            <div className="flex flex-col space-y-5">
              <input
                className="border border-black py-1 pl-4  rounded-lg
              "
                type="number"
                name="Mobile Number"
                placeholder="Mobile number"
                id=""
              />
              <input
                className="border border-black py-1 pl-4 rounded-lg"
                type="password"
                placeholder="Enter Password"
              />
            </div>

            <h1 className="text-base space-x-1">
              <span className="text-gray-500">
                By continuing, I agree to the
              </span>
              <span className="text-[#ff3f6c]">Terms of Use</span>and
            </h1>
            <p className="text-base text-[#ff3f6c]">privacy policy</p>

            <div className="flex flex-col pt-10 space-y-3">
              <button className="bg-[#ff3f6c] text-white py-2">Continue</button>
              <h1 className="text-sm text-gray-500">
                <span>Have troble Logging in? </span>
                <span className="text-[#ff3f6c]">Get Help</span>
              </h1>
              <h1 className="text-sm text-gray-500">
                <span>Don't have an account? </span>
                <span className="text-[#ff3f6c]">Sign Up</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
