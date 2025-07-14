import { fetchEntries, fetchEntryById } from "@/lib/contentful";
import { HomePageFields, EquitySectionProps, PayTheFeeSectionProps, SolutionsPageFields } from "./utils/types";
import HomeClient from "@/components/HomeClient";

export default async function Home() {
  const entries = await fetchEntries<HomePageFields>("landingPage");
  const solutionEntries = await fetchEntries<SolutionsPageFields>("solutionPage");

  if (entries.length === 0) {
    return <div>No content found.</div>;
  }

  const landingData = entries[0].fields;

  const equitySectionId = landingData.firstBannerSectionHeadlineDescription?.sys?.id;
  const equitySectionData = equitySectionId
    ? await fetchEntryById<EquitySectionProps>(equitySectionId)
    : null;

  const payTheFeeSectionId = landingData.payTheFeeSection?.sys.id;
  const payTheFeeSectionData = payTheFeeSectionId
    ? await fetchEntryById<PayTheFeeSectionProps>(payTheFeeSectionId)
    : null;

  const whatWeDoSectionId = landingData.whatWeDoSection?.sys.id;
  const whatWeDoSectionData = whatWeDoSectionId
    ? await fetchEntryById<SolutionsPageFields>(whatWeDoSectionId)
    : null;

  const volunteerSectionId = landingData.volunteerSection?.sys.id;
  const volunteerSectionData = volunteerSectionId
    ? await fetchEntryById<PayTheFeeSectionProps>(volunteerSectionId)
    : null;

  return (
    <HomeClient
      landingData={landingData}
      equitySectionData={equitySectionData?.fields}
      payTheFeeSectionData={payTheFeeSectionData?.fields}
      whatWeDoSectionData={whatWeDoSectionData?.fields}
      solutionEntries={solutionEntries}
      volunteerSectionData={volunteerSectionData?.fields}
    />
  );
}