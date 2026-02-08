import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="text-3xl font-semibold text-gray-600">About us</h1>
      <div>
        {" "}
        <h1 className="text-3xl font-semibold text-gray-600 text-center">
          Our Mission & Vission
        </h1>
        <div className="flex">
          {" "}
          <ul>
            <li>Make out country Green</li>
            <li>Keep our child Breath healthy</li>
            <li>10+ million Plants make in Bangladesh</li>
            <li>Making Out country carbon minimize</li>
          </ul>
          <img src="https://i.ibb.co.com/bR3q2zNj/farm.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
