import React from "react";

interface DescriptionFields {
  description: string;
}

const DescriptionSection = ({ description }: DescriptionFields) => {
  return (
    <section className="px-8 py-20 md:px-[128px] flex items-center justify-center text-white">
      <p className="font-button text-[32px] text-center font-medium uppercase leading-12">{description}</p>
    </section>
  );
};

export default DescriptionSection;
