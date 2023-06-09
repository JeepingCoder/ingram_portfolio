import React, { useState } from "react";

import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Hannah from "../assets/Hannah.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navi, setNavi] = useState(false);
  const handleClick = () => setNavi(!navi);
  return (
    <div className=" z-50 fixed w-full h-[150px] flex justify-between items-center px-4 bg-[#333333] text-[#AD8F18] text-2xl ">
      <div>
        <a href="https://jeepingcoder.github.io/ingram_portfolio/">
        <img
          className="rounded-full"
          src={Hannah}
          alt="logo"
          style={{ width: "155px" }}
        />
        </a>
        
      </div>

      <div>
        <ul className="hidden md:flex ">
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="applications" smooth={true} duration={500}>
              Applications
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          {/* resume field that give a downloadable resume a list of proficiencies */}
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Resume
            </Link>
          </li>
        </ul>
      </div>

      <div onClick={handleClick} className=" md:hidden z-20">
        {!navi ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}

      <ul
        className={
          !navi
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-gray-500 bg-opacity-90"
        }
      >
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="applications" smooth={true} duration={500}>
            Applications
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true}>
            Contact
          </Link>
        </li>
      </ul>

      
      
    </div>
  );
};

export default Navbar;
