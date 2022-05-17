import React, { Component } from "react";

export default function Footer() {
  return (
    <footer className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4">
        <div className="me-5 d-none d-lg-block">
          <span>Questions? Call 1-844-505-2993</span>
        </div>
      </section>
      <section className="">
        <div className="container text-center text-md-start">
          <div className="row">
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <p>
                <a href="#!" className="text-reset">
                  FAQ
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Investors relations
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Ways to watch
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Corporate information
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Only on Netflix
                </a>
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <p>
                <a href="#!" className="text-reset">
                  Help center
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Jobs
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Terms of Use
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Contact Us
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <p>
                <a href="#!" className="text-reset">
                  Account
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Redeem Gift Cards
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Privacy
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Speed Test
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <p>
                <a href="#!" className="text-reset">
                  Media Center
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Buy Gift Cards
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Cookie Preferences
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Legal Notices
                </a>
              </p>
            </div>
          </div>
          <select className="footer-select">
            <option>🌐English</option>
            <option>🌐Spanish</option>
          </select>
        </div>
      </section>
    </footer>
  );
}
