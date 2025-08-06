"use client";
import { useState, useEffect } from "react";

export default function Banner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="bg-yellow text-black px-4 py-2 text-center flex justify-center items-center gap-2 relative z-50 font-button">
      <p className="font-light lg:font-normal uppercase text-xs lg:text-sm">
        Celebrate our latest advocacy win!{" "}
        <a href="#" className="hover:underline" target="_blank">
          Read more here
        </a>
      </p>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 text-xs lg:text-sm font-light lg:font-normal leading-none hover:text-black cursor-pointer"
        aria-label="Close banner"
      >
        X
      </button>
    </div>
  );
}
