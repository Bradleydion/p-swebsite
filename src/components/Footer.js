import { BottomNavigation } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function Footer() {
  return (
    <section className="footer">
      <BottomNavigation>
        <a>Palmer & Sicard Logo</a>
        <ul>
          <li>Service: (603)929-0910 Link</li>
          <li>89 Holland Way Exeter, NH. 03833</li>
          <li>Office: (603)778-1841 </li>
          <li>Fax: (603)778-0119</li>
          <li>Privacy Policy link</li>
        </ul>
        <ul>
          <li>Service Hours:</li>
          <li>Monday Through Friday</li>
          <li>7:00 Am to 4:00 Pm</li>
          <li>After Hours:</li>
          <li>24/7 Prioritized Customer Care</li>
        </ul>
        <ul>
          <a>Quick Links</a>
          <li>
            <Link to="/Construction">Construction</Link>
          </li>
          <li>
            <Link to="/SmallProjects">Small Projects</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/Safety">Safety</Link>
          </li>
          <li>
            <Link to="/Careers">Careers</Link>
          </li>
          <li>
            <Link to="/ContactUs">Contact Us</Link>
          </li>
        </ul>
      </BottomNavigation>
    </section>
  );
}
