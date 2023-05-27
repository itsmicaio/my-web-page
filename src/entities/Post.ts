export interface Post {
  fields: {
    slug: string;
  };
  body: string;
  excerpt: string;
  frontmatter: {
    date: string;
    tags: string[];
    thumbnail: string;
    title: string;
  };
  id: string;
}

export interface Posts {
  allMdx: {
    edges: {
      node: Post;
      next: {
        fields: {
          slug: string;
        };
      };
      previous: {
        fields: {
          slug: string;
        };
      };
    }[];
  };
}
