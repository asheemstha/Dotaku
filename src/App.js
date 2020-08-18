import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header/Header";
import Pages from "./Pages/Pages";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import $ from "jquery";
export default class App extends Component {
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
      <Router>
        <div className="App">
          <div className="nav-escape" onClick={this.navToggle}></div>
          <Navbar />
          <Header />
          <Pages />
          <Footer />
        </div>
      </Router>
    );
  }
}
