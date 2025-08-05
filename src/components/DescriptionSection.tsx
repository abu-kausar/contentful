import React from "react";

interface DescriptionFields {
  description: string;
}

const DescriptionSection = ({ description }: DescriptionFields) => {
  return (
    <section className="px-3 sm:px-8 py-8 md:py-12 lg:py-16 xl:py-20 xl:px-[128px] flex items-center justify-center text-white">
      <p className="font-button text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] text-center font-medium uppercase md:leading-8 xl:leading-12">{description}</p>
    </section>
  );
};

export default DescriptionSection;
