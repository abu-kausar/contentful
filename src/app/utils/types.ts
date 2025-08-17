export interface BlogSlideProps {
  title: string;
  slug: string;
  image: string;
  description: string;
}

export interface ContentfulEntry<T> {
  sys: {
    id: string;
    contentType: {
      sys: {
        id: string;
      };
    };
  };
  fields: T;
}

export interface SolutionsPageFields {
  title: string;
  body: string;
  heroImage: {
    fields: {
      file: {
        url: string;
      };
      title: string;
    };
  };
  slug: string;
  description: string;
}

export interface BlogPostProps {
  title: string;
  body: string;
  heroImage: {
    fields: {
      file: {
        url: string;
      };
      title: string;
    };
  };
  slug: string;
  description: string;
  articles: {
    fields: {
      title: string;
      slug: string;
      description: string;
      heroImage: {
        fields: {
          file: {
            url: string;
          };
          title: string;
        };
      };
    };
  }
}

export interface AboutPageFields {
  title: string;
  body: string;
  heroImage: {
    fields: {
      file: {
        url: string;
      };
      title: string;
    };
  };
}

export interface HomePageFields {
  mainSplashHeadline: string;
  mainSplashDescription: string;
  marqueeTickerText: string;
  marqueeTickerUrl: string;
  firstBannerSectionHeadlineDescription: {
    sys: {
      id: string;
    };
  };
  payTheFeeSection: {
    sys: {
      id: string;
    };
  };
  whatWeDoSection: {
    sys: {
      id: string;
    };
  };
  volunteerSection: {
    sys: {
      id: string;
    };
  };
  heroImage: {
    fields: {
      file: {
        url: string;
      };
      title: string;
    };
  };
}

export interface LandingHeroFields {
  title: string;
  description: string;
}

export interface CampaignTickerProps {
    campaignTickerText: string;
    marqueeTickerLink: string;
}

export interface EquitySectionProps{
  title: string;
  description: string;
}

export interface PayTheFeeSectionProps{
  title: string;
  description: string;
}

export interface HomeClientProps{
  landingData: string;
  equitySectionData: string;
  payTheFeeSectionData: string;
  whatWeDoSectionData: string;
  solutionEntries: string;
  volunteerSectionData: string;
}
