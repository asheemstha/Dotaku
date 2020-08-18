import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
export default class Navbar extends Component {
  navToggle = () => {
    if ($("nav.main-nav").hasClass("active-main-nav")) {
      $("nav.main-nav").removeClass("active-main-nav");
      $(".nav-escape").removeClass("active-nav-escape");
      $("body").removeClass("when-nav-is-active");
    } else {
      $("nav.main-nav").addClass("active-main-nav");
      $(".nav-escape").addClass("active-nav-escape");
      $("body").addClass("when-nav-is-active");
    }
  };
  render() {
    return (
      <nav className="main-nav dark-bg mob-s-desk-h">
        <div className="main-nav-links">
          <div
            className="main-nav-link flex f-ai-c close-link"
            onClick={this.navToggle}
          >
            <div className="main-nav-link-text ty214">Close</div>
          </div>
          <Link to="/" className="main-nav-link flex f-ai-c">
            <div className="main-nav-link-text ty214">Home</div>
          </Link>
          <Link to="/" className="main-nav-link flex f-ai-c">
            <div className="main-nav-link-text ty214">Store</div>
          </Link>
          <Link to="/" className="main-nav-link flex f-ai-c">
            <div className="main-nav-link-text ty214">About Us</div>
          </Link>
          <Link to="/" className="main-nav-link flex f-ai-c">
            <div className="main-nav-link-text ty214">Contact Us</div>
          </Link>
          <Link to="/" className="main-nav-link flex f-ai-c">
            <button className="signin-btn light-btn flex f-jc-fs">
              <div className="signin-text ty214">Sign In</div>
            </button>
          </Link>
        </div>
      </nav>
    );
  }
}
