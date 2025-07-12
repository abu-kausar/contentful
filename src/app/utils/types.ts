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

export interface SlugProps {
  params: { slug: string };
}