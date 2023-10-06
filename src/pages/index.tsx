import * as React from "react";
import { HeadFC, graphql } from "gatsby";
import { Posts } from "../entities/Post";
import ListTags from "../components/list-tags";
import Header from "../components/header";

type IProps = { data: Posts };

const IndexPage: React.FC<IProps> = ({ data }) => {
  const posts = data.allMdx.edges;
  return (
    <div className="text-gray-600">
      <Header />

      <main className="flex flex-col items-center">
        <ul className="pl-0 w-full max-w-2xl">
          {posts.map((post) => (
            <li
              key={post.node.id}
              className="group hover:bg-gray-200 font-thin w-full mb-2 px-4 news:px-0"
            >
              <a className="block py-4" href={post.node.fields.slug}>
                <div className="flex flex-col news:flex-row">
                  <h1 className="text-lg font-semibold group-hover:text-green mr-2">
                    {post.node.frontmatter.title}
                  </h1>
                  <ListTags tags={post.node.frontmatter.tags} maxTags={3} />
                </div>
                <p className="text-sm mt-2 mb-0 leading-5 group-hover:text-green">
                  {post.node.excerpt}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          fields {
            slug
          }
          body
          frontmatter {
            date
            tags
            title
          }
          id
          excerpt(pruneLength: 120)
        }
        next {
          fields {
            slug
          }
        }
        previous {
          fields {
            slug
          }
        }
      }
    }
  }
`;

export const Head: HeadFC = () => (
  <>
    <html lang="pt-BR" />
    <title>Home | Caio Fuzatto</title>
    <meta
      name="description"
      content="Minha página web. Aqui posto um diário de conhecimento técnico. Também tem um pouco sobre minha vida profissional."
    ></meta>
    <meta
      name="google-site-verification"
      content="qEQ7n9bRewKMRJaoC4hs7FPPBNxFGPQgVNcxRztv3hY"
    />
  </>
);
