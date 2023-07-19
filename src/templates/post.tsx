import * as React from "react";
import { graphql } from "gatsby";
import { Post } from "../entities/Post";
import ListTags from "../components/list-tags";
import { MDXProvider } from "@mdx-js/react";

type IProps = {
  data: {
    mdx: Post;
  };
  children: any;
};

const PostTemplate: React.FC<IProps> = ({ data, children }) => {
  const { mdx } = data;
  const { frontmatter } = mdx;
  return (
    <div className="text-gray-600 font-serif">
      <header className="bg-green w-full flex flex-col items-center mb-7">
        <a className="block" href="/">
          <h1 className="my-8 max-w-xs text-white text-2xl">Caio Fuzatto</h1>
        </a>
      </header>
      <article className="pl-0 w-full flex flex-col items-center mb-7">
        <div className="max-w-lg space-x-2">
          <h1 className="font-bold text-2xl">{frontmatter.title}</h1>
          <span className="text-sm">{frontmatter.date}</span>

          <MDXProvider>
            <div className="mdx">{children}</div>
          </MDXProvider>

          <ListTags tags={frontmatter.tags} />
        </div>
      </article>
    </div>
  );
};

export default PostTemplate;

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        tags
        title
      }
      fields {
        slug
      }
      excerpt(pruneLength: 200)
      body
    }
  }
`;

export const Head = ({ data }: IProps) => {
  const { mdx } = data;
  const { frontmatter, excerpt } = mdx;

  return (
    <>
      <html lang="pt-BR" />
      <title>{frontmatter.title}</title>
      <meta name="description" content={excerpt}></meta>
    </>
  );
};
