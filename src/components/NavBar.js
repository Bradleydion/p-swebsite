import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <section className="header">
      <a>header</a>
      <a>Palmer & Sicard Logo</a>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AboutUs">About Us</Link>
        </li>
        <li>
          <Link to="/ContactUs">Contact Us</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
        <li>Portfolio</li>
      </ul>
      <a>(603)929-0910 clickable</a>
      <a>Request A Service button</a>
    </section>
  );
}
