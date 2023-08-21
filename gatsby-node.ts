import path from "path";
import { createFilePath } from "gatsby-source-filesystem";
import { GatsbyNode } from "gatsby";
const postTemplate = path.resolve(`./src/templates/post.tsx`);

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
      type Mdx implements Node {
        fields: Fields
      }
      type Fields {
        slug: String!
      }
    `;
    createTypes(typeDefs);
  };

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  getNode,
  actions,
}) => {
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

type Post = {
  node: {
    fields: {
      slug: string;
    };
    frontmatter: {
      date: string;
      tags: string[];
      title: string;
    };
    body: string;
    internal: {
      contentFilePath: string;
    };
    id: string;
  };
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
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;
  const result = await graphql<{ allMdx: { edges: Post[] } }>(`
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
  `);
  if (result.data) {
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
  }
};
