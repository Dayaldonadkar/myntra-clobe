import React, { Component } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Homepage from "./Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./Components/LogIn";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
