import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-8 md:py-16 text-white">
      <img
        src="/images/about.jpg"
        alt="about hero image"
        className="top-0 left-0 w-full h-full object-cover object-center"
      />
      <h2 className="font-heading font-bold text-6xl md:text-7xl uppercase tracking-wide text-white text-center py-6">
        about
      </h2>
      <div className="text-xl py-8 text-justify font-markdown-body">
        <h3 className="uppercase font-button text-2xl">About.</h3>
        <p className="pb-4">
          <a
            href="https://kingcountyequitynow.com"
            title="KCEN home site"
            className="text-yellow"
          >
            King County Equity Now
          </a>
          &nbsp;(&quot;KCEN&quot;) is a pro-Black advocacy and policy
          institution focused on realizing measurable markers of equity for
          Washington State&apos;s Black community. We build collective power,
          and uplift and co-create transformative equity solutions. We are
          proudly Black-led, Black-centered, and birthed out of the deep legacy
          of Black organizing in Seattle, Martin Luther King Jr. County,
          Washington.
        </p>
        <p className="pb-4">Since inception, we’ve secured:</p>
        <ul className="list-disc pl-8 pb-4">
          <li className="pl-2 mb-3">
            $150 million increased investment in the development for affordable
            housing from the Washington State Housing and Finance Commission
          </li>
          <li className="pl-2 mb-3">
            $27 million for Africatown plaza towards Black community centered
            spaces and replicable, scalable models to halt the impacts of
            gentrification
          </li>
          <li className="pl-2 mb-3">
            Vacant Fire Station 6 property at 23rd and Yesler to create the
            William Gross Center for Cultural Innovation and Enterprise
          </li>
          <li className="pl-2 mb-3">
            Halted the predatory development of a block in the Central District,
            facilitating the purchase of the Keiro building to base build and
            pilot the first Black-led houselessness consortium with holistic,
            wraparound services and short and long term housing solutions
          </li>
          <li className="pl-2 mb-3">
            $1 million towards East African centered-space in Othello for the
            Family Empowerment Center and Community Housing
          </li>
          <li className="pl-2 mb-3">
            $400,000 to bring the accessessible and high quality early education
            of Petah Village to South Seattle for outdoor preschool educationm,
            and more.
          </li>
        </ul>
        <p className="pb-4">A few current efforts include securing:</p>
        <ul className="list-disc pl-8 pb-4">
          <li className="pl-2 mb-3">
            The transfer of nearly 40 acres of vacant farmland to Nurturing
            Roots Farm for Black liberated farming
          </li>
          <li className="pl-2 mb-3">
            $300 million in direct investment into the Black community from
            local American Relief Plan Act funding
          </li>
          <li className="pl-2 mb-3">A statewide $1 billion Anti-Gentrification Fund</li>
          <li className="pl-2 mb-3">
            Base-building Black programming and property ownership for Black
            community-owned schools through-out Martin Luther King Jr. County,
            alongside a suite of Black education equity solutions
          </li>
          <li className="pl-2 mb-3">
            Several Black community-owed health clinics, alongside a suite of
            Black health equity solutions
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
