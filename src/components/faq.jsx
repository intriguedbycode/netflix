import React, { Component } from "react";

export default function Faq() {
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
          <figure className="text-center">
            <h1 className="faq">Frequently Asked Questions</h1>
          </figure>
          <button type="button" className="btn-md btn-secondary">
            What is Netflix?
          </button>
          <button type="button" className="btn-md btn-secondary">
            How much does Netflix cost?
          </button>
          <button type="button" className="btn-md btn-secondary">
            Where can i watch?
          </button>
          <button type="button" className="btn-md btn-secondary">
            How do i cancel
          </button>
          <button type="button" className="btn-md btn-secondary">
            What can i watch on Netflix
          </button>
          <button type="button" className="btn-md btn-secondary">
            Is Netflix good for kids?
          </button>
        </div>
        <h3 className="email-form-title" style={{ paddingBottom: "20px" }}>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <form className="row justify-content-md-center no-gutters">
          <div className="col-auto">
            <input
              className="form-control form-control-lg"
              type="email"
              required
              placeholder="Email adress"
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn-lg btn-danger">
              Get Started {"  >"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
