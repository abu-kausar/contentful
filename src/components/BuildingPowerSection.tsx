import React from "react";

const BuildingPowerSection = () => {
  return (
    <section className="bg-red text-white text-center py-16 px-4">
      <h2 className="text-[80px] md:text-[128px] font-heading font-medium uppercase mb-4">
        Building Power Through Equity
      </h2>

      <div className="bg-yellow inline-flex items-center justify-center px-6 mb-6">
        <p className="text-black text-[64px] font-heading font-black leading-[72px]">
          #PAYTHEFEE
        </p>
      </div>

      <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-white">
        Your donation directly supports grassroots organizing, community-led
        programs, and the teams behind the movement. By contributing, you help
        us continue building equity, amplifying Black voices, and creating
        lasting impact.
      </p>
      <p className="text-white font-medium">#PayTheFee</p>

      <button className="mt-8 bg-yellow hover:bg-yellow-500 text-black font-button uppercase font-medium py-5 px-[50px] cursor-pointer rounded-full">
        Donate Now
      </button>
    </section>
  );
};

export default BuildingPowerSection;
