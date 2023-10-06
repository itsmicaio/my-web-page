import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Highlight, themes } from "prism-react-renderer";

const AppPrismTheme = themes.nightOwl;

const components = {
  pre: (props: any) => {
    const className = props.children.props.className || "";
    const code = props.children.props.children.trim();
    const language = className.replace(/language-/, "");
    return (
      <Highlight code={code} language={language} theme={AppPrismTheme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} p-2 w-full overflow-x-auto my-7`}
            style={style}
          >
            <div className="bg-green w-fit px-2 py-1 text-white -mt-2 mb-1">
              {language.toUpperCase()}
            </div>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })} className="mb-2">
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    );
  },
  code: (props: any) => {
    return (
      <code className="bg-gray-200 px-1 text-green italic">
        {props.children}
      </code>
    );
  },
  a: (props: any) => {
    return <a {...props} target="_blank" />;
  },
  wrapper: ({ children }: any) => <>{children}</>,
};

export const wrapRootElement = ({ element }: any) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
