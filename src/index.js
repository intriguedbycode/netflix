import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/nav";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
import Faq from "./components/faq";
import Footer from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div
      className="container-fluid front-image"
      style={{ borderBottom: "10px solid rgb(43, 42, 42)" }}
    >
      <Nav />
      <Section1 />
    </div>
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Faq />
    <Footer />
  </React.StrictMode>
);
