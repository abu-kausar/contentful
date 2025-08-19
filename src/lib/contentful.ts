/* eslint-disable @typescript-eslint/no-explicit-any */

import { ContentfulEntry } from "@/app/utils/types";
import { createClient } from "contentful";

// Fetch multiple entries by content type
export async function fetchEntries<T>(
  contentType: string
): Promise<ContentfulEntry<T & { heroImageResolved?: any }>[]> {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}&content_type=${contentType}&include=2`;

  const res = await fetch(url, { next: { revalidate: 60 } });

  if (!res.ok) {
    throw new Error(`Contentful fetch failed: ${res.status}`);
  }

  const data = await res.json();

  // Resolve heroImage if present
  const assetsMap = new Map<string, any>();
  if (data.includes && data.includes.Asset) {
    for (const asset of data.includes.Asset) {
      assetsMap.set(asset.sys.id, asset);
    }
  }

  return data.items.map((item: any) => {
    const heroImageRef = item.fields.heroImage?.sys?.id;
    const resolvedHeroImage = heroImageRef
      ? assetsMap.get(heroImageRef)
      : undefined;

    return {
      ...item,
      fields: {
        ...item.fields,
        heroImageResolved: resolvedHeroImage,
      },
    };
  });
}

// Fetch a single entry by ID
export async function fetchEntryById<T>(
  entryId: string
): Promise<ContentfulEntry<T>> {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries/${entryId}?access_token=${accessToken}&include=2`;

  const res = await fetch(url, { next: { revalidate: 60 } });

  if (!res.ok) {
    throw new Error(`Contentful fetch by ID failed: ${res.status}`);
  }

  const data = await res.json();
  return data;
}

export const fetchAssetById = async (id: string) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });
  
  const asset = await client.getAsset(id);
  return asset;
};
