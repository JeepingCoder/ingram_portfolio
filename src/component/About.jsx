import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#3c1414] text-gray-500">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div>
          <div className="end-0 sm-text-right pb-8 pl-4">
            <p className="text-4xl text-gray-400 font-bold inline border-b-4 border-[#ad8f18]">
              About
            </p>
            <h1 className="text-2xl pl-4 py-2">Let Me Introduce Myself~</h1>
          </div>

          <div></div>
          <div className="max-w-[1000px] w-full px-4 grid gap-8">
            <div className="sm-text-right pb-8 pl-4">
              <p className="text-2xl">
                {" "}
                I am currently a student at the University of North Carolina at
                Charlotte. I am a recent graduate of full stack web development
                from UNC at Charlotte. I chose to further my education as a
                means to my next career move. I have a diverse background from
                personel managment to heavy truck production. The commenailty
                between these have been the fact that I have had to learn, adapt
                and use many different software applications and programs.
                Understanding that I learn quickly and have a desire to grow, I
                made the decision that it's time for a career change and decided
                to enroll in a field that is not only challenging but is
                rewarding. I Hope you like what you find here and I cannot wait
                to meet with you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
