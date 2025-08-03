import React from "react";
import { FaPlay } from "react-icons/fa";

interface JoinSectionProps {
  title: string;
  subtitle: string;
}

const JoinSection = ({ title, subtitle }: JoinSectionProps) => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <img
        src="/joinOverlay.png"
        alt="Background"
        className="w-full h-auto object-contain"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[20%] py-10">
        {/* Left side content */}
        <div className="text-white max-w-md text-left space-y-6">
          <h2 className="text-8xl lg:text-[119px] font-bold font-heading uppercase">
            {title}
          </h2>
          <p className="text-xl">{subtitle}</p>
          <button className="mt-2 bg-yellow hover:bg-yellow-500 text-black font-button uppercase font-medium py-5 px-[50px] cursor-pointer rounded-full">
            Tap In
          </button>
        </div>

        {/* Right side play button */}
        <div className="relative mt-10 lg:mt-0">
          <button className="w-12 lg:w-20 h-12 lg:h-20 bg-red-500 text-white rounded-full flex items-center justify-center text-xl shadow-lg hover:scale-105 transition cursor-pointer">
            <FaPlay />
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
