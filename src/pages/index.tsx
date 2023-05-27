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
    <main className="text-gray-600 font-serif">
      <header className="bg-green w-full flex flex-col items-center mb-7">
        <h1 className="my-8 max-w-xs text-white text-2xl">Caio Fuzatto</h1>
      </header>
      <ul className="pl-0 w-full flex flex-col items-center">
        {links.map((link) => (
          <li
            key={link.url}
            className="group hover:bg-gray-200 font-thin text-2xl max-w-lg mb-7 py-2 px-1"
          >
            <a
              className="block"
              href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
            >
              <div className="flex items-center">
                <h6 className="text-sm font-semibold group-hover:text-green">{link.text}</h6>
                {link.badge && (
                  <span
                    className="text-white p-1 font-bold text-xs rounded-md mx-1 bg-red-600 group-hover:bg-black group-hover:text-white"
                    aria-label="New Badge"
                  >
                    NEW!
                  </span>
                )}
              </div>
              <p className="text-sm mt-2 mb-0 leading-5 group-hover:text-green">
                {link.description}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home | Caio Fuzatto</title>;
