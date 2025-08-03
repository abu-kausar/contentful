import React from "react";
import NewsletterForm from "./NewsletterForm";

interface FooterImageProps {
    href: string;
    src: string;
    alt: string;
}

const Footer = () => {
  const ImageLink = ({ href, src, alt } : FooterImageProps) => (
    <a className="h-full" href={href} target="_blank" rel="noreferrer">
      <img className="px-2 h-full" src={src} alt={alt} />
    </a>
  );

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0E0E0E] px-8 md:px-16 pt-8 md:pt-16 w-full text-white">
      <div className="max-w-md mx-auto text-center pb-4">
        <h2 className="font-heading font-bold text-6xl md:text-7xl uppercase tracking-wide text-white">Join our Newsletter</h2>
        <NewsletterForm />
      </div>
      <div className="py-4 flex flex-col md:flex-row justify-between items-center md:items-end">
        <div className="flex h-6 mb-6 md:mb-1">
          <ImageLink
            href="http://instagram.com/kingcountyequitynow"
            src="/images/footer/ig.png"
            alt="instagram logo"
          />
          <ImageLink
            href="https://www.facebook.com/KingCountyEquityNow/"
            src="/images/footer/facebook.png"
            alt="facebook logo"
          />
          <ImageLink
            href="https://twitter.com/KCEquityNow"
            src="/images/footer/twitter.png"
            alt="twitter logo"
          />
          <ImageLink
            href="mailto:info@kingcountyequitynow.com"
            src="/images/footer/white-envelope.png"
            alt="envelope"
          />
        </div>
        <div className="flex flex-col text-center md:text-right">
          <span>1143 Martin Luther King Jr. Way #78</span>
          <span>Seattle, WA 98122</span>
          <a
            href="mailto:info@kingcountyequitynow.com"
            className="text-[#E5B946] underline"
          >
            info@kingcountyequitynow.com
          </a>
          <span>{`© ${currentYear} King County Equity Now`}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
