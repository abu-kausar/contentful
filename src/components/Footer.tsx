// import React from "react";
// import NewsletterForm from "./NewsletterForm";

// interface FooterImageProps {
//     href: string;
//     src: string;
//     alt: string;
// }

// const Footer = () => {
//   const ImageLink = ({ href, src, alt } : FooterImageProps) => (
//     <a className="h-full" href={href} target="_blank" rel="noreferrer">
//       <img className="px-2 h-full" src={src} alt={alt} />
//     </a>
//   );

//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-[#0E0E0E] px-8 md:px-16 pt-8 md:pt-16 w-full text-white">
//       <div className="max-w-md mx-auto text-center pb-4">
//         <h2 className="font-heading font-bold text-6xl md:text-7xl uppercase tracking-wide text-white">Join our Newsletter</h2>
//         <NewsletterForm />
//       </div>
//       <div className="py-4 flex flex-col md:flex-row justify-between items-center md:items-end">
//         <div className="flex h-6 mb-6 md:mb-1">
//           <ImageLink
//             href="http://instagram.com/kingcountyequitynow"
//             src="/images/footer/ig.png"
//             alt="instagram logo"
//           />
//           <ImageLink
//             href="https://www.facebook.com/KingCountyEquityNow/"
//             src="/images/footer/facebook.png"
//             alt="facebook logo"
//           />
//           <ImageLink
//             href="https://twitter.com/KCEquityNow"
//             src="/images/footer/twitter.png"
//             alt="twitter logo"
//           />
//           <ImageLink
//             href="mailto:info@kingcountyequitynow.com"
//             src="/images/footer/white-envelope.png"
//             alt="envelope"
//           />
//         </div>
//         <div className="flex flex-col text-center md:text-right">
//           <span>1143 Martin Luther King Jr. Way #78</span>
//           <span>Seattle, WA 98122</span>
//           <a
//             href="mailto:info@kingcountyequitynow.com"
//             className="text-[#E5B946] underline"
//           >
//             info@kingcountyequitynow.com
//           </a>
//           <span>{`© ${currentYear} King County Equity Now`}</span>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import NewsletterForm from "./NewsletterForm";

interface FooterImageProps {
  href: string;
  src: string;
  alt: string;
}

const Footer = () => {
  const ImageLink = ({ href, src, alt }: FooterImageProps) => (
    <a className="h-12 w-12 bg-[#1D1D1F] rounded-full p-3" href={href} target="_blank" rel="noreferrer">
      <img className="h-full" src={src} alt={alt} />
    </a>
  );

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0E0E0E] text-white w-full px-4 md:px-16 pt-10">
      {/* Top section with background image effect */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative border-b border-white/40 pb-10">
        {/* Contact Section */}
        <div className="md:w-1/2 flex flex-col gap-5 md:gap-6">
          <h3 className="text-white text-3xl md:text-4xl xl:text-5xl uppercase font-heading font-bold">
            Contact Us
          </h3>
          <div className="flex gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="24"
              viewBox="0 0 18 24"
              fill="none"
            >
              <g clip-path="url(#clip0_215_739)">
                <path
                  d="M10.1109 23.4C12.5156 20.3906 18 13.0969 18 9C18 4.03125 13.9688 0 9 0C4.03125 0 0 4.03125 0 9C0 13.0969 5.48438 20.3906 7.88906 23.4C8.46562 24.1172 9.53438 24.1172 10.1109 23.4ZM9 6C9.79565 6 10.5587 6.31607 11.1213 6.87868C11.6839 7.44129 12 8.20435 12 9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12C8.20435 12 7.44129 11.6839 6.87868 11.1213C6.31607 10.5587 6 9.79565 6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6Z"
                  fill="#E5B946"
                />
              </g>
              <defs>
                <clipPath id="clip0_215_739">
                  <rect width="18" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="">
              1143 Martin Luther King Jr. Way #78 <br />
              Seattle, WA 98122
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M2.4375 3.25C1.0918 3.25 0 4.3418 0 5.6875C0 6.4543 0.360547 7.17539 0.975 7.6375L12.025 15.925C12.6039 16.3566 13.3961 16.3566 13.975 15.925L25.025 7.6375C25.6395 7.17539 26 6.4543 26 5.6875C26 4.3418 24.9082 3.25 23.5625 3.25H2.4375ZM0 8.9375V19.5C0 21.2926 1.45742 22.75 3.25 22.75H22.75C24.5426 22.75 26 21.2926 26 19.5V8.9375L14.95 17.225C13.7922 18.0934 12.2078 18.0934 11.05 17.225L0 8.9375Z"
                fill="#E5B946"
              />
            </svg>
            <a
              href="mailto:tapin@kingcountyequitynow.com"
              className="text-[#E5B946] block"
            >
              tapin@kingcountyequitynow.com
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 h-6">
            <ImageLink
              href="http://instagram.com/kingcountyequitynow"
              src="/images/footer/ig.svg"
              alt="instagram logo"
            />
            <ImageLink
              href="https://www.facebook.com/KingCountyEquityNow/"
              src="/images/footer/facebook.svg"
              alt="facebook logo"
            />
            <ImageLink
              href="https://twitter.com/KCEquityNow"
              src="/images/footer/twitter.svg"
              alt="twitter logo"
            />
            <ImageLink
              href="mailto:info@kingcountyequitynow.com"
              src="/images/footer/white-envelope.svg"
              alt="envelope"
            />
          </div>
        </div>

        {/* Newsletter Form */}
        <div className="md:pl-10 md:w-1/2">
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-wide mb-4 xl:mb-10">
            Join our Newsletter
          </h2>
          <NewsletterForm />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm py-4 gap-4">
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          <a href="/about" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Our Services
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>
        <p className="text-center md:text-right">
          © {currentYear}. All Right Reserved by{" "}
          <span className="text-[#E5B946]">King County Equity Now</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
