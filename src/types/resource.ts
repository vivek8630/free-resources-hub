export type SiteResource = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  rating: number;
  reviews: number;
  visits: string;
  lastUpdated: string;
  websiteUrl: string;
  freeFeatures: string[];
  useCases: string[];
  isTrending?: boolean;
};
