import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold text-justify">
            <p>Hi, I'm Prashanth, nice to meet you.</p>
          </div>
          <div className="text-justify">
            <p>
              I'm a highly motivated and detail-oriented software engineer
              pursuing a Master's degree in Computer Science at UNC Charlotte.
              With over three years of experience in full-stack web development,
              I possess a strong technical expertise in programming languages
              such as Java, JavaScript, and Python, as well as modern frameworks
              including React, Node.js, and Angular. My commitment to delivering
              high-quality work and my ability to work collaboratively with
              others make me a valuable asset to any team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
