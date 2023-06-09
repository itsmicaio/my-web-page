import * as React from "react";
import { graphql } from "gatsby";
import { Post } from "../entities/Post";
import ListTags from "../components/ListTags";
import { MDXProvider } from "@mdx-js/react";

type IProps = {
  data: {
    mdx: Post;
  };
  children: any
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
      <main>
        <article className="pl-0 w-full flex flex-col items-center">
          <div className="font-thin max-w-lg mb-7 py-2 px-1">
            <p className="text-sm mt-2 mb-0 leading-5">{frontmatter.date}</p>
            <h1 className="font-bold text-lg ">{frontmatter.title}</h1>

            <MDXProvider>
              <div className="text-sm mt-2 mb-5 leading-5 mdx">{children}</div>
            </MDXProvider>
            <ListTags tags={frontmatter.tags} classNames="mt-2" />
          </div>
        </article>
      </main>
    </div>
  );
};

export default PostTemplate;

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date
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
