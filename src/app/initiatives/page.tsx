// const InitiativePage = () => {
//   return (
//     <div className="custom-iamgeBackground">
//       <div className="container mx-auto px-8">
//         <div className="flex flex-col-reverse md:flex-row items-center justify-between py-8">
//           <div className="w-full text-center md:text-left md:w-1/2 pr-10">
//             <h1 className="font-heading text-center md:text-left text-white font-bold text-5xl md:text-8xl uppercase">
//               Making a difference through one initiative at a time.
//             </h1>
//             <p className="text-center md:text-left text-white text-xl mt-2">
//               We are Black-led, Black-centered, and birthed out of a deep legacy
//               of Black organizing in Martin Luther King Jr. County, Washington
//               State.
//             </p>
//             <button
//               data-campaign-id="4028"
//               data-custom="true"
//               className="commitchange-donate focus:outline-none rounded-full font-button py-2 uppercase tracking-wider text-black bg-yellow px-6 mb-4 md:mb-0 mt-5 undefined cursor-pointer"
//             >
//               Make a Donation
//             </button>

//             <div className="commitchange-modal">
//               <div className="commitchange-closed commitchange-overlay"></div>
//             </div>
//           </div>

//           <div className="w-full h-full md:w-1/2">
//             <img src="/initiative.png" className="w-full h-full" />
//           </div>
//         </div>

//         {/* swiper */}
//         <div className="flex flex-col mt-10">
//           <h1 className="text-white text-5xl font-heading font-bold uppercase">
//             Trending
//           </h1>
//           <div className="mt-5">

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InitiativePage;

// "use client";
// import { fetchEntries } from "@/lib/contentful";
// import { useEffect, useRef, useState } from "react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Autoplay, Navigation } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { InitiativesPageProps } from "../utils/types";

// const trendingItems = [
//   {
//     id: 1,
//     title: "MIGRANT TO AFRICATOWN",
//     img: "/plan.png",
//     link: "to-africatown-community",
//   },
//   {
//     id: 2,
//     title: "WILLIAM GROSE CENTER",
//     img: "/initiative.png",
//     link: "william-grose-center",
//   },
//   {
//     id: 3,
//     title: "2021 ELECTIONS CANDIDATE GRADE REPORT",
//     img: "/plan.png",
//     link: "elections-update",
//   },
//   {
//     id: 4,
//     title: "JOURNEY TO BLACK SAFETY SURVEY",
//     img: "/initiative.png",
//     link: "journey-to-black-safety-survey",
//   },
//   {
//     id: 5,
//     title: "BLACK COMMUNITY INVESTMENT",
//     img: "/images/winsbg.png",
//     link: "invest-in-black",
//   },
// ];

// const recentWinItems = [
//   {
//     id: 1,
//     title: "MIGRANT TO AFRICATOWN",
//     img: "/plan.png",
//     link: "to-africatown-community",
//   },
//   {
//     id: 2,
//     title: "WILLIAM GROSE CENTER",
//     img: "/initiative.png",
//     link: "william-grose-center",
//   },
//   {
//     id: 3,
//     title: "2021 ELECTIONS CANDIDATE GRADE REPORT",
//     img: "/plan.png",
//     link: "elections-update",
//   },
//   {
//     id: 4,
//     title: "JOURNEY TO BLACK SAFETY SURVEY",
//     img: "/initiative.png",
//     link: "journey-to-black-safety-survey",
//   },
//   {
//     id: 5,
//     title: "BLACK COMMUNITY INVESTMENT",
//     img: "/images/winsbg.png",
//     link: "invest-in-black",
//   },
// ];

// const InitiativePage = () => {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const [entries, setEntries] = useState<any[]>([]);

//   useEffect(() => {
//     async function loadData() {
//       const entries = await fetchEntries<InitiativesPageProps>("blogPost");
//       setEntries(entries);
//       console.log("data", entries);
//     }
//     loadData();
//   }, []);

//   if (entries.length === 0) {
//     return <div className="flex items-center justify-center w-full h-screen">No content found.</div>;
//   }

//   return (
//     <div className="custom-iamgeBackground">
//       <div className="container mx-auto px-8">
//         {/* Hero Section */}
//         <div className="flex flex-col-reverse md:flex-row items-center justify-between py-8">
//           <div className="w-full text-center md:text-left md:w-1/2 pr-10">
//             <h1 className="font-heading text-center md:text-left text-white font-bold text-5xl md:text-8xl uppercase">
//               Making a difference through one initiative at a time.
//             </h1>
//             <p className="text-center md:text-left text-white text-xl mt-2">
//               We are Black-led, Black-centered, and birthed out of a deep legacy
//               of Black organizing in Martin Luther King Jr. County, Washington
//               State.
//             </p>
//             <button
//               data-campaign-id="4028"
//               data-custom="true"
//               className="commitchange-donate focus:outline-none rounded-full font-button py-2 uppercase tracking-wider text-black bg-yellow px-6 mb-4 md:mb-0 mt-5 cursor-pointer"
//             >
//               Make a Donation
//             </button>
//           </div>

//           <div className="w-full h-full md:w-1/2">
//             <img src="/initiative.png" className="w-full h-full" />
//           </div>
//         </div>

//         {/* Trending Section */}
//         <div className="flex flex-col mt-10">
//           <h1 className="text-white text-5xl font-heading font-bold uppercase">
//             Trending
//           </h1>

//           <div className="relative mt-5">
//             {/* Custom Navigation Buttons (top-right like your screenshot) */}
//             <div className="absolute -top-16 right-0 flex gap-4 z-10">
//               <button
//                 ref={prevRef}
//                 className="bg-red hover:bg-red-700 text-white px-6 py-3 flex items-center justify-center cursor-pointer"
//                 aria-label="Previous"
//               >
//                 {/* left arrow */}
//                 <img src="/Left_Arrow.png" alt="" />
//               </button>
//               <button
//                 ref={nextRef}
//                 className="bg-green hover:bg-green-700 text-white px-6 py-3 flex items-center justify-center cursor-pointer"
//                 aria-label="Next"
//               >
//                 {/* right arrow */}
//                 <img src="/Right_Arrow.png" alt="" />
//               </button>
//             </div>

//             <Swiper
//               modules={[Autoplay, Navigation]}
//               spaceBetween={20}
//               slidesPerView={3}
//               centeredSlides
//               loop
//               initialSlide={1} // start with 2,3,4 visible
//               autoplay={{ delay: 3000, disableOnInteraction: false }}
//               // attach custom buttons via refs
//               onBeforeInit={(swiper) => {
//                 swiper.params.navigation.prevEl = prevRef.current;
//                 swiper.params.navigation.nextEl = nextRef.current;
//               }}
//               navigation={{
//                 prevEl: prevRef.current,
//                 nextEl: nextRef.current,
//               }}
//               onSwiper={(swiper) => {
//                 // ensure nav is re-initialized after refs are set
//                 setTimeout(() => {
//                   swiper.params.navigation.prevEl = prevRef.current;
//                   swiper.params.navigation.nextEl = nextRef.current;
//                   swiper.navigation.destroy();
//                   swiper.navigation.init();
//                   swiper.navigation.update();
//                 });
//               }}
//             >
//               {trendingItems.map((item) => (
//                 <SwiperSlide key={item.id}>
//                   <div className="flex flex-col items-center">
//                     <img
//                       src={item.img}
//                       alt={item.title}
//                       className="w-full h-64 2xl:h-[432px] object-cover"
//                     />
//                     <div className="text-center p-2 mt-4">
//                       <p className="text-white text-lg uppercase truncate">
//                         {item.title}
//                       </p>
//                       <p className="text-white text-base font-light mt-2">
//                         {item.link}
//                       </p>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>

//         {/* Filtered Contents */}
//         <div className="py-10">
//           <div className="w-full">
//             <div className="flex items-center justify-between flex-wrap md:flex-nowrap">
//               <button className="w-full px-2 py-3 md:py-5 text-white outline-none border-none shadow-none text-base font-button font-bold hover:bg-red uppercase cursor-pointer bg-red">
//                 All
//               </button>
//               <button className="w-full px-2 py-3 md:py-5 text-white outline-none border-none shadow-none text-base font-button font-bold hover:bg-red uppercase cursor-pointer  bg-blue-500">
//                 Recent Wins
//               </button>
//               <button className="w-full px-2 py-3 md:py-5 text-white outline-none border-none shadow-none text-base font-button font-bold hover:bg-red uppercase cursor-pointer  bg-blue-500">
//                 News &amp; Publications
//               </button>
//               <button className="w-full px-2 py-3 md:py-5 text-white outline-none border-none shadow-none text-base font-button font-bold hover:bg-red uppercase cursor-pointer  bg-blue-500">
//                 Current Initiatives
//               </button>
//               <button className="w-full px-2 py-3 md:py-5 text-white outline-none border-none shadow-none text-base font-button font-bold hover:bg-red uppercase cursor-pointer  bg-blue-500">
//                 Blogs
//               </button>
//             </div>

//             <div>
//               <div className="flex items-center justify-between mt-10">
//                 <h1 className="text-white text-5xl font-heading font-bold uppercase">
//                   Recent Wins
//                 </h1>
//                 <a href="/all-blog">
//                   <p className="uppercase text-white text-base">View all</p>
//                 </a>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 mt-5 w-[100%]">
//                 {recentWinItems.slice(0, 3).map((item) => (
//                   <div key={item.id} className="flex flex-col items-center">
//                     <img
//                       src={item.img}
//                       alt={item.title}
//                       className="w-full h-64 2xl:h-[432px] object-cover"
//                     />
//                     <div className="text-center p-2 mt-4">
//                       <p className="text-white text-lg uppercase truncate">
//                         {item.title}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between mt-10">
//                 <h1 className="text-white text-5xl font-heading font-bold uppercase">
//                   News & Publications
//                 </h1>
//                 <a href="/all-blog">
//                   <p className="uppercase text-white text-base">View all</p>
//                 </a>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 mt-5 w-[100%]">
//                 {recentWinItems.slice(0, 3).map((item) => (
//                   <div key={item.id} className="flex flex-col items-center">
//                     <img
//                       src={item.img}
//                       alt={item.title}
//                       className="w-full h-68 object-cover"
//                     />
//                     <div className="text-center p-2 mt-4">
//                       <p className="text-white text-lg uppercase truncate">
//                         {item.title}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between mt-10">
//                 <h1 className="text-white text-5xl font-heading font-bold uppercase">
//                   Current Initiatives
//                 </h1>
//                 <a href="/all-blog">
//                   <p className="uppercase text-white text-base">View all</p>
//                 </a>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 mt-5 w-[100%]">
//                 {recentWinItems.slice(0, 3).map((item) => (
//                   <div key={item.id} className="flex flex-col items-center">
//                     <img
//                       src={item.img}
//                       alt={item.title}
//                       className="w-full h-64 2xl:h-[432px] object-cover"
//                     />
//                     <div className="text-center p-2 mt-4">
//                       <p className="text-white text-lg uppercase truncate">
//                         {item.title}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between mt-10">
//                 <h1 className="text-white text-5xl font-heading font-bold uppercase">
//                   Blogs
//                 </h1>
//                 <a href="/all-blog">
//                   <p className="uppercase text-white text-base">View all</p>
//                 </a>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 mt-5 w-[100%]">
//                 {recentWinItems.slice(0, 3).map((item) => (
//                   <div key={item.id} className="flex flex-col items-center">
//                     <img
//                       src={item.img}
//                       alt={item.title}
//                       className="w-full h-64 2xl:h-[432px] object-cover"
//                     />
//                     <div className="text-center p-2 mt-4">
//                       <p className="text-white text-lg uppercase truncate">
//                         {item.title}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InitiativePage;

// app/initiative/page.tsx (server component, no "use client")
import { fetchEntries } from "@/lib/contentful";
import InitiativePageClient from "@/components/InitiativePageClient";
import { BlogPostProps } from "../utils/types";

export default async function InitiativePage() {
  const entries = await fetchEntries<BlogPostProps>("blogPost");

  return <InitiativePageClient entries={JSON.parse(JSON.stringify(entries))} />;
}

