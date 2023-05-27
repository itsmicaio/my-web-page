const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    });

    createNodeField({
      node,
      name: "slug",
      value: `post/${slug.slice(12)}`,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    query MyQuery {
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
  `).then((result) => {
    const posts = result.data.allMdx.edges;
    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/post.tsx`),
        context: {
          id: node.id,
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous,
        },
      });
    });

    const postsPerPage = 10;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/` : `/post/${index + 1}`,
        component: path.resolve(`./src/templates/post.tsx`),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1,
        },
      });
    });
  });
};
