import React from "react";

const BlackHealthPage = () => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto p-8 md:py-16 text-white">
        <img
          src="/health.jpg"
          alt="about black health image"
          className="top-0 left-0 w-full h-full object-cover object-center"
        />
        <h2 className="font-heading font-bold text-6xl md:text-7xl uppercase tracking-wide text-white text-center py-6">
          black health
        </h2>
        <div className="text-xl py-8 text-justify font-markdown-body">
          <p className="pb-4">
            ICYMI: KCEN hosted a{" "}
            <a
              href="https://www.youtube.com/watch?v=yzAo57IRft8"
              title="Community Conference Black Health Care Equity"
              className="text-yellow underline"
            >
              Community Conference: Building Collective Black Power in
              Healthcare
            </a>{" "}
            featuring Black community advocates and thought-leaders Dr. Ben
            Danielson, Sybill Hippolyte, Danisha Jefferson-Abye, Jackie Vaughn,
            Ayan Musse, and more.
            <br />
            <br />
            Community leaders elevated the need and current movement to build
            Black collective power in the health field particularly in Seattle:
            a City that boasts some of the most sophisticated, renowned
            hospitals and medical facilities in the world. The disparities in
            medical treatment received by the Black communities are appalling
            with COVID-19 serving as just the most recent flashlight into this
            dark and disturbing reality. At the conference, leaders rolled-out a
            suite of initial health equity solutions to combat this reality.
            Read on to tap-in, take action and support this work below.
          </p>
        </div>
      </div>
      <h2 className="p-8 md:p-16 text-white font-heading font-bold text-5xl uppercase tracking-wide py-6">
        Related Links
      </h2>
    </>
  );
};

export default BlackHealthPage;
