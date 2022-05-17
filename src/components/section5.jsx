import React, { Component } from "react";

export default function Section5() {
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
            <img className="img-fluid" src={require("../nkids.png")} alt="" />
          </div>
          <div className="col-md-6 align-self-center pr-5">
            <h1>Create profiles for kids.</h1>
            <h3>
              Send kids on adventures with their favorite characters in a space
              made just for them-- free with your membership
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
