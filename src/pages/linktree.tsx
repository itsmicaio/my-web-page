import * as React from "react";
import { HeadFC, Link, graphql } from "gatsby";
import { Posts } from "../entities/Post";
import ListTags from "../components/list-tags";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

type IProps = { data: Posts };

const IndexPage: React.FC<IProps> = ({ data }) => {
  const posts = data.allMdx.edges;
  return (
    <div className="text-white font-serif bg-green h-screen w-screen flex flex-col items-center">
      <header className="py-2">
        <Link
          className="flex flex-col justify-center items-center gap-2"
          to="/"
        >
          <img
            className="w-24 h-24 rounded-full border-solid border-white border-[1px]"
            src="/uploads/avatar.png"
            alt="Avatar Caio Fuzatto"
          />
          <h1 className="text-white text-2xl">Caio Fuzatto</h1>
        </Link>
        <div className="flex w-full gap-5 justify-center my-3">
          <a href="https://www.linkedin.com/in/itsmicaio/" target="_blank">
            <FaLinkedin className="h-9 w-9" />
          </a>
          <a href="https://github.com/itsmicaio" target="_blank">
            <FaGithub className="h-9 w-9" />
          </a>
          <a href="https://www.instagram.com/itsmicaio/" target="_blank">
            <FaInstagram className="h-9 w-9" />
          </a>
        </div>
      </header>
      <main>
        <div className="border-b border-solid pb-1 px-1">
          <span className="text-lg">Últimos artigos</span>
        </div>
        <ul className="pl-0 w-full flex flex-col items-center gap-2">
          {posts.map((post) => (
            <li
              key={post.node.id}
              className="group hover:bg-gray-200 font-thin max-w-lg w-full px-1"
            >
              <Link className="block py-4" to={post.node.fields.slug}>
                <h1 className="font-semibold group-hover:text-green mr-2 mb-2">
                  {post.node.frontmatter.title}
                </h1>
                <ListTags tags={post.node.frontmatter.tags} maxTags={3} />
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex w-screen justify-center">
          <Link to="/" className="underline cursor-pointer">
            Ver tudo
          </Link>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { layout: { eq: "article" } } }
      limit: 4
    ) {
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
    <title>Linktree | Caio Fuzatto</title>
    <meta
      name="description"
      content="Links rápidos do Caio Fuzatto. Redes sociais, últimos posts e mais..."
    ></meta>
  </>
);
