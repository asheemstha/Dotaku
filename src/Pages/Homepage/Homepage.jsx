import React, { Component } from "react";
import HeroBG from "../../Assets/Images/BG/HeroBG1.jpg";
export default class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="homepage-hero">
          <img src={HeroBG} alt="" className="hero-img fill" />
        </div>
      </div>
    );
  }
}
