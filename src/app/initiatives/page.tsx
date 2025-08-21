import { fetchEntries } from "@/lib/contentful";
import InitiativePageClient from "@/components/InitiativePageClient";
import { BlogPostProps } from "../utils/types";

export default async function InitiativePage() {
  let entries = await fetchEntries<BlogPostProps>("blogPost");

  // Exclude the "about-us" entry
  entries = entries.filter((entry) => entry.fields.slug !== "about-us");

  return <InitiativePageClient entries={JSON.parse(JSON.stringify(entries))} />;
}