/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";

interface JoinSectionProps {
  title: string;
  subtitle: string;
}

const JoinSection = ({ title, subtitle }: JoinSectionProps) => {
  const [showVideo, setShowVideo] = useState(false);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (showVideo) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showVideo]);

  return (
    <section className="relative w-full overflow-hidden h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] max-h-[500px]">
      {/* Background image */}
      <img
        src="/teamOverlay.png"
        alt="Background"
        className="w-full h-full object-cover"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
        <div className="text-white max-w-md text-center space-y-2 lg::space-y-4 xl:space-y-5">
          <h2 className="text-7xl lg:text-8xl xl:text-9xl font-medium font-heading uppercase">
            {title}
          </h2>
          <p className="text-base sm:text-lg xl:text-xl">{subtitle}</p>
          <button className=" bg-yellow hover:bg-yellow/80 transition-all text-black font-button uppercase font-normal lg:font-medium py-3 md:py-4 lg:py-5 px-[30px] sm:px-9 lg:px-[70px] cursor-pointer rounded-full">
            Tap In
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
