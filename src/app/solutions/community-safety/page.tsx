import React from "react";

const BlackCommunityPage = () => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto p-8 md:py-16 text-white">
        <img
          src="/community.jpeg"
          alt="community safety image"
          className="top-0 left-0 w-full h-full object-cover object-center"
        />
        <h2 className="font-heading font-bold text-6xl md:text-7xl uppercase tracking-wide text-white text-center py-6">
          black community safety
        </h2>
        <div className="text-xl py-8 text-justify font-markdown-body">
          <p className="pb-4">
            Already experiencing COVID-19&apos;s economic fallout, conditions
            for Seattle&apos;s Black community are on a trajectory to worsen.
            Against that backdrop, KCEN and many others in the Black community
            mobilized to divest from policing and demanded correlating
            investment in pro-Black public safety solutions that work for us,
            for the first time in Seattle&apos;s history.
          </p>
          <p className="pb-4">
            Emboldened by the overwhelming support of tens of thousands of
            community members, the Seattle City Council briefly upheld their
            decision to divest from a percentage of the Seattle Police
            Department (SPD)&apos;s bloated annual budget and invest modestly in
            Black communities. It should not have taken such prolonged,
            sustained community efforts for this long over-due change but we
            acknlowedge the small percentage of divestment as a break from
            decades of votes to expand violent, anti-Black policing.
          </p>
          <p className="pb-4">
            The work of reshaping this region into one that values all Black
            lives—and moves away from funding racist policing and towards
            resourcing true public safety for all—is long overdue and not for
            non-Black folks, unaccountable gatekeepers or non-rooted folks to
            dictate.
          </p>
          <p className="pb-4">
            We advocated strongly for monies from the police budget to be
            invested directly into the Black community and are unmoved on that
            stance.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <a
            href=""
            className="bg-red text-black px-5 py-2 rounded-full text-base uppercase font-bold hover:bg-green- hover:text-white"
          >
            take action
          </a>
        </div>
      </div>
      <h2 className="p-8 md:p-16 text-white font-heading font-bold text-5xl uppercase tracking-wide py-6">
        Related Links
      </h2>
    </>
  );
};

export default BlackCommunityPage;
