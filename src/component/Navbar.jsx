import React from "react";
import { FaBars, FaTimes } from "react-icons";
import Hannah from "../assets/Hannah.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="z-50 fixed w-full h-[155px] flex justify-between items-center px-4 bg-[#333333] text-[#AD8F18]">
      <div>
        <a href="../components/home.jsx">
          <img
            className="rounded-full"
            src={Hannah}
            alt="Logo"
            style={{ width: "155px" }}
          />
        </a>
      </div>

      <div>
        <ul className="hidden md:flex">
          <l1>
            <Link to="About" smooth={true} duration={500}>
              About
            </Link>
          </l1>
          <l1>
            <Link to="applications" smooth={true} duration={500}>
                Applications
            </Link>
          </l1>

          <li>About</li>
          <li>Applications</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
