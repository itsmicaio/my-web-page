import * as React from "react";
import { HeadFC, graphql } from "gatsby";
import { Posts } from "../entities/Post";

type IProps = { data: Posts };

const IndexPage: React.FC<IProps> = ({ data }) => {
  const posts = data.allMdx.edges;
  return (
    <div className="text-gray-600 font-serif">
      <header className="bg-green w-full flex flex-col items-center mb-7">
        <a className="block" href="/">
          <h1 className="my-8 max-w-xs text-white text-2xl">Caio Fuzatto</h1>
        </a>
      </header>

      <main>
        <ul className="pl-0 w-full flex flex-col items-center">
          {posts.map((post) => (
            <li
              key={post.node.id}
              className="group hover:bg-gray-200 font-thin max-w-lg mb-7 py-2 px-1"
            >
              <a className="block" href={post.node.fields.slug}>
                <div className="flex items-center">
                  <h1 className="text-sm font-semibold group-hover:text-green">
                    {post.node.frontmatter.title}
                  </h1>
                  {post.node.frontmatter.tags.map((tag) => (
                    <span
                      key={`${post.node.id}-${tag}`}
                      className="text-white p-1 font-bold text-xs rounded-md mx-1 bg-red-600 group-hover:bg-black group-hover:text-white"
                      aria-label="New Badge"
                    >
                      {tag}
                    </span>
                  ))}
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
            thumbnail
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

export const Head: HeadFC = () => <title>Home | Caio Fuzatto</title>;
