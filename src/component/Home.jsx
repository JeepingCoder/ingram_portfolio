import React from "react";
import face from "../assets/Face.png";

const Home = () => {
    return(
        <div name="landingpage" className="w-full h-screen bg-[#3c1414]">
            {/* container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <img 
                    className="ml-auto rounded-full"
                    src={face}
                    alt="face"
                    style={{ width: "200px" }}
                />

            </div>

        </div>
    )
}

export default Home