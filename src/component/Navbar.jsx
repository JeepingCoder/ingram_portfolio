import React from 'react'
import {FaBars, FaTimes} from 'react-icons'
import Hannah from "../assets/Hannah.png"

const Navbar = () => {
  return (
    <div className="fixed w-full h-[150px] flex justify-between items-center px-4 bg-[#333333] text-gray-500">
        <div>
            <img src={Hannah} alt="Logo" style={{width: "150px"}} />
        </div>
        <div>
            <ul>
                <l1>Home</l1>
                <li>About</li>
               <li>Applications</li>
               <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar