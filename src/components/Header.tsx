"use client";
import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Import DonateButton dynamically to prevent hydration issues
const DonateButton = dynamic(() => import("./DonateButton"), {
  ssr: false,
  loading: () => <div className="w-16 h-8 bg-gray-600 rounded animate-pulse" />
});

export default function Header() {
  const [open, setOpen] = useState(false);

  const NavLinkItem = ({ children, paddingRight }: {
    children: React.ReactNode;
    paddingRight?: boolean;
  }) => (
    <li
      className={`flex justify-center items-center hover:text-[#E5B946] ${paddingRight ? "md:pr-5" : ""}`}
      onClick={() => setOpen(false)}
    >
      {children}
    </li>
  );

  return (
    <header className="min-h-20 border-b-2 border-[#4d4a4a] font-button text-white w-full">
      <nav className="w-full flex justify-between items-center h-full flex-wrap px-8 md:px-16">
        <Link href="/" className="h-20 py-4">
          <img className="h-full" src="/images/logo.svg" alt="KCEN logo" />
        </Link>
        
        <button
          className="md:hidden w-8 h-8 relative focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="block w-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out ${
                  i === 0 ? (open ? "rotate-45" : "-translate-y-1.5") :
                  i === 1 ? (open ? "opacity-0" : "") :
                  (open ? "-rotate-45" : "translate-y-1.5")
                }`}
              />
            ))}
          </div>
        </button>

        <ul className={`transition-all duration-500 ease-in-out overflow-hidden text-2xl md:text-base uppercase flex flex-col md:flex-row justify-around md:justify-end ${
          !open ? "invisible md:visible max-h-0" : "visible max-h-96"
        } mx-auto md:mx-0 h-1/2-screen md:max-h-20 md:py-0`}>
          <div className="flex flex-col md:flex-row justify-evenly md:justify-end flex-nowrap md:flex-wrap flex-grow md:py-5 md:pl-5 text-center md:text-left tracking-wide">
            {[
              { href: "/black-equity-solutions", text: "Black Equity Solutions" },
              { href: "/black-media", text: "Black Media" },
              { href: "/initiatives", text: "Initiatives" },
              { href: "/freedom-actions", text: "Freedom Actions" }
            ].map((item) => (
              <NavLinkItem key={item.href} paddingRight>
                <Link href={item.href}>{item.text}</Link>
              </NavLinkItem>
            ))}
          </div>
          <NavLinkItem>
            <DonateButton />
          </NavLinkItem>
        </ul>
      </nav>
    </header>
  );
}