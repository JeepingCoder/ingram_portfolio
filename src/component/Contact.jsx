import React, { useState } from "react";
import { BsPaperclip } from "react-icons/bs";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#3c1414] text-gray-400">
      <div className="w-full h-full max-w-[1000px] mx-auto  px-8 flex flex-col justify-center">
        <div>
          <div className="sm-text-right pb-8 pt-6 pl-4 ">
            <p className="text-4xl font-bold inline border-b-4 border-[#ad8f18]">
              Contact
            </p>
            <form method="post" action="https://getform.io/f/954c3c53-a1ec-43ee-ad21-2da1e3bceb76" className="flex flex-col max-w-[800px] w-full">
              <div>
                <p className="text-gray-500 text-2xl pl-4 py-4">Submit the following form:</p>
              </div>
              <input className="rounded-md p-2 bg-[#ad8f18]" type="text" placeholder="Name" name="name"/>
              <input className="rounded-md my-4 p-2 bg-[#ad8f18]" type="email" placeholder="Email" name="email"/>
              <textarea className="rounded-md p-2 bg-[#ad8f18] " name="message" rows="5" placeholder="Message"></textarea>
              <button><a href="#_" class="relative inline-flex items-center justify-center mt-4 p-4 px-6 py-3  overflow-hidden font-medium text-gray-400 transition duration-300 ease-out border-2 border-gray-600 rounded-full shadow-md group">
<span class="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-[#ad8f18] group-hover:translate-x-0 ease">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute flex items-center justify-center w-full h-full text-gray-500 transition-all duration-300 transform group-hover:translate-x-full ease">Button Text</span>
<span class="relative invisible">Button Text</span>
</a></button>
              
            </form>
          </div>

          {/* Social Media Links */}
          <div className=" flex justify-center">
            <ul>
              <li className="w-[150px] h-[50px] flex justify-between items-center rounded-md ml-[-100px] bg-[#238636]">
                <a
                  className="flex justify-between items-center w-full text-white"
                  href="https://github.com/JeepingCoder"
                >
                  Github <FaGithub size={25} />
                </a>
              </li>
              <li className="w-[150px] h-[50px] flex justify-between items-center rounded-md ml-[-100px]  bg-[#0a66c2]">
                <a
                  className="flex justify-between items-center w-full text-white"
                  href="https://www.linkedin.com/in/ingrampr/"
                >
                  Linkedin <FaLinkedin size={25} />
                </a>
              </li>
              <li className="w-[150px] h-[50px] flex justify-between items-center rounded-md ml-[-100px] bg-[#1d98f0]">
                <a
                  className="flex justify-between items-center w-full text-white"
                  href="https://twitter.com/pingram1285"
                >
                  Twitter <FaTwitter size={25} />
                </a>
              </li>
              <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] bg-[#555d50] rounded-md">
                <a
                  className="flex justify-between items-center w-full text-white"
                  href="https://docs.google.com/document/d/1zMz9srtNIIRJgsFK5hhEM6UgaSL1hLqErHv5eOR_8OI/edit?usp=sharing"
                >
                  Resume <BsPaperclip size={25} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


