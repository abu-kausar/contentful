"use client";

import React from "react";
import Button from "./Button";

interface ColorSectionProps {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  showButton?: boolean;
  backgroundColor?: string;
  className?: string;
  linkText?: string;
  linkHref?: string;
  linkColorClass?: string;
}

const ColorSection: React.FC<ColorSectionProps> = ({
  title = "Join the team",
  subtitle = "Sign-up to volunteer",
  buttonLabel = "Tap In",
  onButtonClick,
  showButton = true,
  backgroundColor = "bg-green-600",
  className = "",
  linkText,
  linkHref,
  linkColorClass = "text-yellow",
}) => {
  return (
    <div
      className={`py-16 px-8 flex flex-col gap-5 ${backgroundColor} mx-auto text-center text-white ${className}`}
    >
      <h2 className="font-heading font-bold text-6xl md:text-7xl uppercase tracking-wide">
        {title}
      </h2>
      <p className="max-w-4xl mx-auto font-body text-xl font-normal">
        {subtitle}{" "}
        {linkText && linkHref && (
          <a
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`underline ${linkColorClass}`}
          >
            {linkText}
          </a>
        )}
      </p>

      {showButton && (
        <Button label={buttonLabel} onClick={onButtonClick} />
      )}
    </div>
  );
};

export default ColorSection;