import React, { Component } from "react";

export default function Section2() {
  return (
    <section
      style={{
        backgroundColor: "black",
        color: "white",
        borderBottom: "10px solid rgb(43, 42, 42)",
      }}
    >
      <div className="container-fluid p-5">
        <div className="row  justify-content-md-center">
          <div className="col-md-6 align-self-center pl-5">
            <h1>Enjoy on your TV</h1>
            <h3>
              Watch on your Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h3>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid"
              src={require("../netflix-tv.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
