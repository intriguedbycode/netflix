import React, { Component } from "react";

export default function Section4() {
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
            <h1>Watch everywhere.</h1>
            <h3>
              Stream unlimited movies and TV shows on your phone, tablet, laptop
              and TV without paying more.
            </h3>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid"
              src={require("../ntvtablet.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
