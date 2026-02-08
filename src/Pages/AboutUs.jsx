import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="text-3xl font-semibold text-gray-600 text-center">
        About us
      </h1>

      <div className="bg-white py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto border-l-4 border-emerald-600 pl-8">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
              Who We Are
            </h2>
          </div>

          <div className="space-y-6 text-gray-600 text-lg ">
            <p>
              We are a team of plant enthusiasts dedicated to making the world a
              bit greener, one home at a time. Our store was born from a passion
              for sustainable living and the belief that nature belongs in every
              workspace and living room.
            </p>

            <p>
              Every plant we offer is carefully selected and nurtured with the
              highest standards. We don't just provide greenery; we provide the
              knowledge and support you need to help your new companions thrive
              in their new environment.
            </p>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <h1 className="text-3xl font-semibold text-gray-600 text-center">
          Our Mission & Vission
        </h1>
        <div className="flex items-center justify-center gap-20 mt-10">
          {" "}
          <ul className="list-disc space-y-4 text-2xl">
            <li>Make out country Green</li>
            <li>Keep our child Breath healthy</li>
            <li>10+ million Plants make in Bangladesh</li>
            <li>Making Out country carbon minimize</li>
          </ul>
          <img
            className="rounded-2xl"
            src="https://i.ibb.co.com/ycWDZV8G/Rice.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
