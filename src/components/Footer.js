import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer(){
  return (
    <footer>
      <section className="top">
        <ul>
          <li>
            <h3>WavJam</h3>
            <NavLink to="/about-us">About Us</NavLink>
            <NavLink to='/press&news'>Press & News</NavLink>
            <NavLink to='/sponsors'>Sponsors</NavLink>
            <NavLink to='/merch'>Merch</NavLink>
            <NavLink to='/events'>Events</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/terms&privacy'>Terms & Privacy</NavLink>
          </li>
          <li>
            <h3>Support</h3>
            <NavLink to='/pricing'>Pricing</NavLink>
            <NavLink to='/copyright'>Copyright Complaint</NavLink>
            <NavLink to='/contact-us'>Contact Us</NavLink>
          </li>
          <li>
            <h3>Community</h3>
            <NavLink to='/forum'>Forum</NavLink>
            <NavLink to='/artists-near-me'>Artists Near Me</NavLink>
          </li>
          <li>
            <h3>Social Media</h3>
            <a>Instagram</a>
            <a>TikTok</a>
            <a>X</a>
            <a>Meta</a>
            <a>YouTube</a>
          </li>
        </ul>
      </section>
      <section className="bottom">&copy; 2024 Ronx LLC</section>
    </footer>
  )
}