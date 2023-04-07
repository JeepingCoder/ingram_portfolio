import React from "react";
import PreTrip from "../assets/PreTrip.png";
import WalkPerson from "../assets/WalkPerson.png";
import Petcheck from "../assets/Petcheck.png";


const Applications = () => {
    return(
        <div
        name="applications"
        className="w-full md:h-screen bg-[#3c1414] text-gray-500">

            <div className="max-w-[1100px] mx-auto p-2 flex flex-col justify-center w-full h-full">
                <div>
                    <div className="pb-8">
                        <p className="text-4xl font-bold inline broder-b-4 border-[#ad8f18]">Applications</p>
                    </div>
                    {/* card element */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* grid element */}
                    <div 
                    style={{ backgroundImage: `url(${PreTrip})` }}
                    className="group container rounded-md flex justify-center items-center mx-auto content-div">
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Applications