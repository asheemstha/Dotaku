import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import $ from "jquery";
import BrandLogo from "../../Assets/Images/Brand/DotakuLogo.png";
export default class Header extends Component {
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
      <header className="main-header light-bg">
        <div className="header-content flex f-c-sb">
          <div className="h-c-left flex f-pc">
            <button
              className="header-burger mob-s-desk-h flex f-pc dark-btn"
              onClick={this.navToggle}
            >
              <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
              </div>
            </button>
            <Link to="/" className="brand-link">
              <div className="brand-logo flex f-pc">
                <img
                  src={BrandLogo}
                  alt="D"
                  className="brand-logo-img desk-s-mob-h"
                />
                <div className="brand-logo-text ty214 mob-s-desk-h">Dotaku</div>
              </div>
            </Link>
          </div>
          <div className="h-c-right flex f-pc">
            <button className="light-btn header-search-btn flex f-pc">
              <FiSearch className="header-search-icon" />
            </button>
            <nav className="header-nav flex f-ai-c desk-s-mob-h">
              <Link to="/" className="header-nav-link">
                <div className="header-nav-link-text ty214">Home</div>
              </Link>
              <Link to="/" className="header-nav-link">
                <div className="header-nav-link-text ty214">Store</div>
              </Link>
              <Link to="/" className="header-nav-link">
                <div className="header-nav-link-text ty214">About Us</div>
              </Link>
              <Link to="/" className="header-nav-link">
                <div className="header-nav-link-text ty214">Contact Us</div>
              </Link>
              <Link to="/" className="header-nav-link">
                <button className="signin-btn dark-btn flex f-jc-fs">
                  <div className="signin-text ty214">Sign In</div>
                </button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
