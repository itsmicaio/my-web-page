import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
    badge: true,
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="p-16 text-gray-600 font-serif" >
      <h1
        className="mt-0 mb-16 max-w-xs"
      >
        Caio Fuzatto Daily Notes
      </h1>
      <ul className="pl-0 mb-24">
        {links.map((link) => (
          <li
            key={link.url}
            className="font-thin text-2xl max-w-lg mb-7"
          >
            <span>
              <a
                className="text-sm"
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span
                  className="text-white p-1 font-bold text-xs rounded-md mx-1 bg-red-600"
                  aria-label="New Badge"
                >
                  NEW!
                </span>
              )}
              <p className="text-sm mt-2 mb-0 leading-5">{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
