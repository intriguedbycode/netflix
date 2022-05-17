import React, { Component } from "react";

export default function Section1() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-md-center">
        <div className="col col-lg-12 our-story-card-text">
          <figure className="text-center">
            <h1 className="story-card">
              Unlimited movies, TV, shows and more.
            </h1>
            <h2 className="story-card-sub-title">
              Watch anywhere. Cancel anytime.
            </h2>
            <h3 className="email-form-title">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div
              className="row justify-content-md-center no-gutters"
              style={{ paddingBottom: "20px", paddingTop: "15px" }}
            >
              <div className="col-auto">
                <input
                  className="form-control form-control-lg text-center fillbox"
                  type="email"
                  required
                  placeholder="Email adress"
                />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn-lg btn-danger fillbox">
                  Get Started {"  >"}
                </button>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
}
