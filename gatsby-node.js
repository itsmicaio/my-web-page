const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);
const postTemplate = path.resolve(`./src/templates/post.tsx`)

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
            internal {
              contentFilePath
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
        component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          id: node.id,
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous,
        },
      });
    });
  });
};
