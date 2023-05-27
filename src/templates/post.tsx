import * as React from "react";
import { graphql } from "gatsby";
import { Post } from "../entities/Post";

type IProps = {
  data: {
    mdx: Post;
  };
};

const PostTemplate: React.FC<IProps> = ({ data }) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;
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
            <h1 className="text-sm font-semibold">{frontmatter.title}</h1>
            <div
              className="text-sm mt-2 mb-0 leading-5"
              dangerouslySetInnerHTML={{ __html: body }}
            />
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
        thumbnail
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
