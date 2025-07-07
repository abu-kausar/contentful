'use client';

import React from "react";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label = "Tap In", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="self-center font-button text-base font-medium uppercase cursor-pointer bg-transparent hover:bg-white hover:text-black mt-4 px-18 py-2 border-2 border-white rounded-full"
    >
      {label}
    </button>
  );
};

export default Button;