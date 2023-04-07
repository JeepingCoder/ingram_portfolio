import React, { useState } from "react";

const Contact = () =>{
    return(
        <div name="contact" className="w-full h-screen bg-[#3c1414] text-gray-500">
            <div className="w-full h-full max-w-[1000px] mx-auto px-8 flex flex-col justify-center">
                <div>
                    <div className="sm-text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-[#ad8f18]">
                            Contact
                        </p>
                    </div>

                    {/* Social Media Links */}
                    <div className="h-screen flex pt-40 justify-center">
                        <ul>
                            <li className="w-150px h-150px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-600 bg-[#238636] font-Ubuntu rounded-md">
                                <a
                                className="flex justify-between items-center w-full text-white"
                                href="https://github.com/JeepingCoder">
                                    Linkedin <FaLinkedin size={25}/>
                                </a>

                            </li>
                        </ul>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Contact