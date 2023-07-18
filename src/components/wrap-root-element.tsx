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
          <pre className={`${className} p-2`} style={style}>
            <div className="bg-green w-fit px-2 py-1 text-white -mt-2 mb-1">
              {language.toUpperCase()}
            </div>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
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
      <Highlight
        code={props.children}
        language={"javascript"}
        theme={AppPrismTheme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <code className={`${className}`} style={style}>
            {tokens.map((line, i) => (
              <span {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </span>
            ))}
          </code>
        )}
      </Highlight>
    );
  },
  wrapper: ({ children }: any) => <>{children}</>,
};

export const wrapRootElement = ({ element }: any) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
