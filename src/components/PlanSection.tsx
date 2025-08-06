// import React from "react";
// import { FaCheckCircle } from "react-icons/fa";

// interface PlanProps {
//   title: string;
//   subtitle: string;
// }

// const PlanSection = ({ title, subtitle }: PlanProps) => {
//   return (
//     <section className="flex flex-col md:flex-row justify-between gap-5 xl:gap-10 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 px-5 lg:px-20 xl:px-32 bg-green text-white">
//       {/* Left Side */}
//       <div className="w-full md:w-1/2 flex items-center justify-center">
//         <img
//           src="/plan.png"
//           alt="Equity Now Protest"
//           className="rounded w-full h-[400px] sm:h-[500px] md:h-[500px] lg:h-[640px] object-cover"
//         />
//       </div>

//       {/* Right Side */}
//       <div className="w-full md:w-1/2">
//         <p className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-[96px] font-medium uppercase mb-2">{title}</p>
//         <p className="font-body text-lg xl:text-xl font-semibold mb-4 md:mb-8 leading-relaxed">{subtitle}</p>

//         {/* Box Section */}
//         <div className="border-4 border-yellow divide-y-4 divide-yellow">
//           <div className="grid grid-cols-2 font-button uppercase md:text-left divide-x-4 divide-yellow">
//             <div className="p-3 lg:p-6 flex justify-center items-center gap-2">
//               <div className="bg-red p-1 lg:p-3 rounded-full">
//                 <img src="/reading-book.svg" alt="reading book" className="md:w-10"/>
//               </div>
//               <p className="text-white font-normal text-sm md:text-base">Equity Solutions</p>
//             </div>
//             <div className="p-3 lg:p-6 flex justify-center items-center gap-2">
//               <div className="bg-red p-1 lg:p-3 rounded-full">
//                 <img src="/group.svg" alt="group" className="md:w-10"/>
//               </div>
//               <p className="text-white font-normal text-sm md:text-base">Community Power</p>
//             </div>
//           </div>

//           <div className="py-3 lg:py-5 px-4 sm:px-6 lg:px-9 space-y-2 lg:space-y-4 font-body text-md md:text-text-lg">
//             <div className="flex items-start gap-2">
//               <FaCheckCircle className="text-yellow mt-1" />
//               <p>We build Black equity through local leadership</p>
//             </div>
//             <div className="flex items-start gap-2">
//               <FaCheckCircle className="text-yellow mt-1" />
//               <p>Our vision: thriving, anti-racist communities.</p>
//             </div>
//           </div>
//         </div>

//         {/* Button */}
//         <button className="mt-6 lg:mt-8 bg-yellow hover:bg-yellow-500 text-black font-button uppercase font-normal lg:font-medium py-3 md:py-4 lg:py-5 px-6 sm:px-9 lg:px-[50px] cursor-pointer rounded-full">
//           Learn More
//         </button>
//       </div>
//     </section>
//   );
// };

// export default PlanSection;

import React from "react";
import { FaCheckCircle } from "react-icons/fa";

interface PlanProps {
  title: string;
  subtitle: string;
}

const PlanSection = ({ title, subtitle }: PlanProps) => {
  return (
    <section className="flex flex-col md:flex-row justify-between py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 px-5 lg:px-20 xl:px-32 bg-green text-white">
      <div className="flex flex-col md:flex-row w-full md:h-[600px] gap-5 xl:gap-10">
        {" "}
        {/* ✅ Equal height container at md+ */}
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex items-center justify-center h-full">
          {" "}
          {/* ✅ h-full added */}
          <img
            src="/plan.png"
            alt="Equity Now Protest"
            className="rounded w-full h-full object-cover"
          />
        </div>
        {/* Right Side */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-between">
          {" "}
          {/* ✅ h-full + vertical spacing */}
          <div>
            <p className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-[96px] xl:leading-16 font-medium uppercase mb-5 xl:mb-10">
              {title}
            </p>
            <p className="font-body text-lg xl:text-xl font-semibold mb-4 md:mb-8 leading-relaxed">
              {subtitle}
            </p>

            {/* Box Section */}
            <div className="border-4 border-yellow divide-y-4 divide-yellow">
              <div className="grid grid-cols-2 font-button uppercase md:text-left divide-x-4 divide-yellow">
                <div className="p-3 lg:p-6 flex justify-center items-center gap-2">
                  <div className="bg-red p-1 lg:p-3 rounded-full">
                    <img
                      src="/reading-book.svg"
                      alt="reading book"
                      className="md:w-10"
                    />
                  </div>
                  <p className="text-white font-normal text-sm md:text-base">
                    Equity Solutions
                  </p>
                </div>
                <div className="p-3 lg:p-6 flex justify-center items-center gap-2">
                  <div className="bg-red p-1 lg:p-3 rounded-full">
                    <img src="/group.svg" alt="group" className="md:w-10" />
                  </div>
                  <p className="text-white font-normal text-sm md:text-base">
                    Community Power
                  </p>
                </div>
              </div>

              <div className="py-3 lg:py-5 px-4 sm:px-6 lg:px-9 space-y-2 lg:space-y-4 font-body text-md md:text-text-lg">
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
          </div>
          {/* Button aligned to bottom */}
          <button className="w-[210px] mt-6 lg:mt-8 bg-yellow hover:bg-yellow-500 text-black font-button uppercase font-normal lg:font-medium py-3 md:py-4 lg:py-5 px-6 sm:px-9 lg:px-[50px] cursor-pointer rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
