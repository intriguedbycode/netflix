import React, { Component } from "react";

export default function Section3() {
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
          <div className="col-md-6">
            <img className="img-fluid" src={require("../nphone.png")} alt="" />
          </div>
          <div className="col-md-6 align-self-center pr-5">
            <h1>Download your shows to watch offline.</h1>
            <h3>
              Save your favorites easily and always have something to watch.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
