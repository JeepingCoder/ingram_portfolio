import React from "react";
import Passwordgen from "../assets/Passwordgen.png";
import WalkPerson from "../assets/WalkPerson.png";
import PetCheck from "../assets/Petcheck.png";
import GamersRealm from "../assets/GamersRealm.png"
import Weatherapp from "../assets/Weatherapp.png"
import CalenderApp from "../assets/CalenderApp.png"

const Applications = () => {
  return (
    <div
    name="applications"
    className="w-full h-full bg-[#3c1414] text-gray-500"
  >
    <div className="max-w-[1100px] mx-auto p-40 flex flex-col justify-center w-full  ">
      <div>
        <div className="pb-8">
          <p className="text-4xl text-gray-400 font-bold inline border-b-4 border-[#ad8f18]">
            Applications
          </p>
          <p className="text-2xl pl-4 py-2 ">
            Check out some of my applications I've built~
          </p>
        </div>
        {/* card */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Grid */}
          <div
            style={{ backgroundImage: `url(${Passwordgen})` }}
            className=" group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div>
              
              <div>
              <a href="https://jeepingcoder.github.io/MySecurePassword-/" class="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
<span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Password Generator</span>
</a>

                
              </div>
            </div>
          </div>
          {/* Grid2 */}
          <div
            style={{ backgroundImage: `url(${WalkPerson})` }}
            className=" group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div>
              <div>
              <a href="https://mhengerer.github.io/WalkPerson/#access_token=BQCeHkc9eHdU0Ce9i8REk5_yxVS6RTEquTQvyUhTYQ3HNiXBg9419s4puLTg6yOh4XQ46dO924MvLMjUxs9i1rzXzeOYd4xQNOovQYigwDbkkKiNN0yX6BcA_2hZscFVeyTeeeDpRhs1Er3Ho72GlJfHVDpBPSQ8-6rPPXYF_A4SZZBWolp0mMqp42DSdj18e21W4B0YEIdIjzX_z0YfkGEtiukE6wvIAVOff-IYrABfAgT-pKLhrZXkoWakwrIagEtX_Kn_eas_UQs&token_type=Bearer&expires_in=3600" class="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
<span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Walkperson</span>
</a>

                
              </div>
            </div>
          </div>
          {/* grid3 */}
          <div
            style={{ backgroundImage: `url(${PetCheck})` }}
            className=" group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div>
              <div>
              <a href="https://polar-springs-69420.herokuapp.com/" class="relative inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
<span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Pet Check Plus</span>
</a>

                
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${GamersRealm})` }}
            className=" group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div>
              
              <div>
              <a href="https://gamersrealm.herokuapp.com/" class="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
<span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Gamer's Realm </span>
</a>

                
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Weatherapp})` }}
            className=" group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div>
              
              <div>
              <a href="https://jeepingcoder.github.io/weather-app2/" class="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
<span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Weather App </span>
</a>

                
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${CalenderApp})` }}
            className=" group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div>
              
              <div>
              <a href="https://jeepingcoder.github.io/calender-app/" class="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
<span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
<span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">Calender App</span>
</a>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Applications;
