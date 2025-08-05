import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

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
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <img
        src="/joinOverlay.png"
        alt="Background"
        className="w-full h-auto object-contain"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 z-10 flex flex-row items-center justify-between pl-[12%] pr-[15%] sm:px-[20%]  ">
        {/* Left side content */}
        <div className="text-white max-w-md text-left md:space-y-4 lg:space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold font-heading uppercase">
            {title}
          </h2>
          <p className="text-lg xl:text-xl">{subtitle}</p>
          <button className="mt-auto lg:mt-8 bg-yellow hover:bg-yellow-500 text-black font-button uppercase font-normal lg:font-medium py-3 md:py-4 lg:py-5 px-6 sm:px-9 lg:px-[50px] cursor-pointer rounded-full">
            Tap In
          </button>
        </div>

        {/* Right side play button */}
        <div className="relative lg:mt-0">
          <button
            onClick={() => setShowVideo(true)}
            className="w-12 lg:w-20 h-12 lg:h-20 bg-red-500 text-white rounded-full flex items-center justify-center text-xl shadow-lg hover:scale-105 transition cursor-pointer"
          >
            <FaPlay />
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#000000A8] bg-opacity-80 backdrop-blur-sm"></div>

          <div className="relative w-full max-w-7xl z-50">
            {/* Close Button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 text-white text-3xl z-50 cursor-pointer"
            >
              <IoMdClose />
            </button>

            {/* YouTube Iframe */}
            <div
              className="relative h-0"
              style={{ paddingBottom: "56.25%", paddingTop: "25px" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full p-4 md:p-8"
                src="https://www.youtube.com/embed/h4vKh5TX0zE?autoplay=1&modestbranding=1&rel=0&controls=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default JoinSection;
