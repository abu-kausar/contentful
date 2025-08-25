"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="min-h-20 custom-iamgeBackground border-b-2 border-gray-200 top-0 z-50 w-full">
      <nav
        role="navigation"
        className="w-full flex justify-between items-center h-full flex-wrap px-8 md:px-16"
      >
        {/* Logo */}
        <Link href="/" className="h-20 py-4">
          <img className="h-full" src="/images/logo.svg" alt="KCEN logo" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-8 h-8 relative text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="block w-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out ${
                  i === 0
                    ? menuOpen
                      ? "rotate-45"
                      : "-translate-y-1.5"
                    : i === 1
                    ? menuOpen
                      ? "opacity-0"
                      : ""
                    : menuOpen
                    ? "-rotate-45"
                    : "translate-y-1.5"
                }`}
              />
            ))}
          </div>
        </button>

        {/* Desktop & Mobile Menu */}
        <ul
          className={`transition-all duration-500 ease-in-out font-button text-2xl md:text-base text-white uppercase flex flex-col md:flex-row justify-around md:justify-end w-full md:w-auto ${
            menuOpen
              ? "max-h-screen py-4 visible"
              : "max-h-0 invisible md:visible md:max-h-20"
          } overflow-hidden`}
        >
          <div className="flex flex-col md:flex-row justify-evenly md:justify-end uppercase flex-nowrap md:flex-wrap flex-grow md:py-5 md:pl-5 text-center md:text-left tracking-wide">
            <li
              className={`flex justify-center items-center md:pr-5 ${
                pathname === "/solutions" ? "text-yellow" : "text-white"
              } hover:text-yellow`}
            >
              <Link href="/solutions">Black Equity Solutions</Link>
            </li>
            <li className="flex justify-center items-center hover:text-yellow md:pr-5">
              <a
                href="https://transcripts.kingcountyequitynow.com"
                target="_blank"
                rel="noreferrer"
              >
                Black Media
              </a>
            </li>
            <li
              className={`flex justify-center items-center md:pr-5 ${
                pathname === "/initiatives" ? "text-yellow" : "text-white"
              } hover:text-yellow`}
            >
              <Link href="/initiatives">Initiatives</Link>
            </li>
            <li
              className={`flex justify-center items-center md:pr-5 ${
                pathname === "/about" ? "text-yellow" : "text-white"
              } hover:text-yellow`}
            >
              <Link href="/about">About Us</Link>
            </li>
          </div>
          <li className="flex justify-center items-center hover:text-yellow">
            <button
              data-campaign-id="4028"
              data-custom="true"
              className="commitchange-donate focus:outline-none rounded-full font-button py-2 uppercase tracking-wider text-black bg-yellow hover:bg-yellow/80 transition-all px-6 mt-5 md:mt-0 mb-4 md:mb-0 cursor-pointer"
            >
              <Link href={"https://secure.qgiv.com/for/africatowncommunitylandtrust/"} target="_blank">Donate</Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
