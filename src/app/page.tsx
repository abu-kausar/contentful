"use client";
import ColorSection from "@/components/ColorSection";
import FeaturedSectionWithVideo from "@/components/FeaturedSectionWithVideo";
import LandingHero from "@/components/LandingHero";

export default function Home() {
  return (
    <div className="">
      <LandingHero/>
      
      <ColorSection
        title="We have a plan"
        subtitle="We leverage the brilliance of our local Black ecosystem to identify, elevate, and co-create Black equity
          solutions to combat anti-Black racism and bring about sustained, thriving Black communities."
        onButtonClick={() => console.log("Sponsorship clicked!")}
        backgroundColor="bg-green"
        showButton={false}
      />

      <ColorSection
        title="#PaytheFee"
        subtitle="Help make this work more sustainable and donate (#PayTheFee)."
        buttonLabel="Donate"
        onButtonClick={() => console.log("Sponsorship clicked!")}
        backgroundColor="bg-red"
        showButton={true}
      />

      <ColorSection
        title="We Are Africatown"
        subtitle="Watch our latest episode in We Are Africatown video series. Help Sami's Corner Store expand and grow"
        linkText="here"
        linkHref="https://www.gofundme.com/f/save-sami039s-store"
        linkColorClass="text-yellow"
        onButtonClick={() => console.log("Sponsorship clicked!")}
        backgroundColor="bg-bostonBlue"
        showButton={false}
      />

      <FeaturedSectionWithVideo youTubeLink="https://www.youtube.com/watch?v=O8rL4YcPH1g" />

      <ColorSection
        title="Join the team"
        subtitle="Sign-up to volunteer."
        buttonLabel="Tap In"
        onButtonClick={() => console.log("Sponsorship clicked!")}
        backgroundColor="bg-green"
        showButton={true}
      />
    </div>
  );
}
