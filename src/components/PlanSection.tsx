import React from "react";
import { FaCheckCircle } from "react-icons/fa";

interface PlanFields {
  title: string;
  subtitle: string;
}

const PlanSection = ({ title, subtitle }: PlanFields) => {
  return (
    <section className="flex flex-col md:flex-row justify-between gap-10 py-16 px-[128px] bg-green text-white">
      {/* Left Side */}
      <div className="w-full md:w-1/2">
        <p className="font-heading text-[96px] font-medium uppercase mb-2">{title}</p>
        <p className="font-body text-xl font-semibold mb-8 leading-relaxed">{subtitle}</p>

        {/* Box Section */}
        <div className="border-2 border-yellow divide-y-2 divide-yellow">
          <div className="grid grid-cols-2 font-button uppercase md:text-left divide-x-2 divide-yellow">
            <div className="p-6 flex justify-center items-center gap-2">
              <div className="bg-red p-3 rounded-full">
                <img src="/reading-book.svg" alt="reading book" />
              </div>
              <p className="text-white font-normal">Equity Solutions</p>
            </div>
            <div className="p-6 flex justify-center items-center gap-2">
              <div className="bg-red p-3 rounded-full">
                <img src="/group.svg" alt="group" />
              </div>
              <p className="text-white font-normal">Community Power</p>
            </div>
          </div>

          <div className="py-5 px-9 space-y-4 font-body text-md md:text-text-lg">
            <div className="flex items-start gap-2">
              <FaCheckCircle className="text-yellow mt-1" />
              <p>We build Black equity through local leadership</p>
            </div>
            <div className="flex items-start gap-2">
              <FaCheckCircle className="text-yellow mt-1" />
              <p>Our vision: thriving, anti-racist communities.</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="mt-8 bg-yellow hover:bg-yellow-500 text-black font-button uppercase font-medium py-5 px-[50px] cursor-pointer rounded-full">
          Learn More
        </button>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img
          src="/plan.png"
          alt="Equity Now Protest"
          className="rounded w-full h-[640px] object-cover"
        />
      </div>
    </section>
  );
};

export default PlanSection;
