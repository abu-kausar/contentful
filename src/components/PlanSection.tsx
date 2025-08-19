/* eslint-disable @next/next/no-img-element */
import { FaCheckCircle } from "react-icons/fa";

interface PlanProps {
  title: string;
  subtitle: string;
}

const PlanSection = ({ title, subtitle }: PlanProps) => {
  return (
    <section className="custom-overlay flex flex-col md:flex-row items-center justify-between py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 px-5 lg:px-20 xl:px-32 bg-green text-white">
      <div className="flex flex-col md:flex-row items-center w-full md:h-[600px] 2xl:h-[730px] gap-5 xl:gap-10">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex items-center justify-center h-full">
          <img
            src="/plan.png"
            alt="Equity Now Protest"
            className="rounded w-full h-full object-cover"
          />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center gap-5 2xl:gap-10">
          <div>
            <h1 className="text-center md:text-left text-7xl md:text-8xl 2xl:text-9xl font-medium font-heading uppercase mb-5">
              {title}
            </h1>
            <p className="font-body text-lg xl:text-xl font-semibold mb-4 md:mb-8 leading-relaxed">
              {subtitle}
            </p>

            {/* Box Section */}
            <div className="border-4 border-yellow divide-y-4 divide-yellow">
              <div className="grid grid-cols-2 font-button uppercase md:text-left divide-x-4 divide-yellow">
                <div className="p-3 2xl:p-6 flex justify-center items-center gap-2">
                  <div className="bg-red p-1 lg:p-3 rounded-full">
                    <img
                      src="/reading-book.svg"
                      alt="reading book"
                      className="md:w-10"
                    />
                  </div>
                  <p className="text-white font-normal text-sm md:text-base xl:text-lg 2xl:text-xl">
                    Equity Solutions
                  </p>
                </div>
                <div className="p-3 lg:p-6 flex justify-center items-center gap-2">
                  <div className="bg-red p-1 lg:p-3 rounded-full">
                    <img src="/group.svg" alt="group" className="md:w-10" />
                  </div>
                  <p className="text-white font-normal text-sm md:text-base xl:text-lg 2xl:text-xl">
                    Community Power
                  </p>
                </div>
              </div>

              <div className="py-3 lg:py-5 px-4 sm:px-6 lg:px-9 space-y-2 lg:space-y-4 font-body text-md md:text-text-lg">
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-yellow mt-1" />
                  <p className="text-base 2xl:text-lg">We build Black equity through local leadership</p>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-yellow mt-1" />
                  <p className="text-base 2xl:text-lg">Our vision: thriving, anti-racist communities.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Button aligned to bottom */}
          <button className="max-w-[242px] mt-5 2xl:mt-0 bg-yellow hover:bg-yellow-500 text-black font-button uppercase font-normal lg:font-medium py-3 md:py-4 lg:py-5 px-[30px] sm:px-9 lg:px-[70px] cursor-pointer rounded-full mx-auto md:mx-0">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
