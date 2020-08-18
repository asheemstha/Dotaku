import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    return (
      <footer className="main-footer light-bg">
        <div className="footer-content flex f-c-sb">
          <div className="social-links flex f-pc">
            <a href="/" className="social-link ty214">
              Facebook
            </a>
            <a
              href="https://www.instagram.com/dotakunepal/"
              className="social-link ty214"
            >
              Instagram
            </a>
            <a href="/" className="social-link ty214">
              Twitter
            </a>
          </div>
          <div className="copyright-claim flex f-pc ">
            <div className="copyright-claim-text ty214">
              &copy; Copyright reserved by Dotaku 2020
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
