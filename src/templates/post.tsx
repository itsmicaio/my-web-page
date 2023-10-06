import * as React from "react";
import { graphql } from "gatsby";
import { Post } from "../entities/Post";
import ListTags from "../components/list-tags";
import { MDXProvider } from "@mdx-js/react";
import Header from "../components/header";

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
    <div className="text-gray-600">
      <Header />

      <article className="pl-0 w-full flex flex-col items-center mb-7">
        <div className="w-full max-w-2xl">
          <h1 className="font-bold text-2xl mx-4 news:mx-0">
            {frontmatter.title}
          </h1>
          <span className="text-sm mx-4 news:mx-0">{frontmatter.date}</span>

          <MDXProvider>
            <div className="mdx">{children}</div>
          </MDXProvider>

          <div className="mx-4 news:mx-0">
            <ListTags tags={frontmatter.tags} />
          </div>
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
