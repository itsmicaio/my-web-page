import { Node } from "gatsby";

export default function(node: Node) {
  if (node.internal.type === 'Mdx') {
    const { title, date } = node.frontmatter as any;
    return (
      <div className="w-full h-screen bg-green p-4 pt-16 pr-16">
        <img src="/uploads/icon.png" alt="logo" className="w-12 h-12 fixed top-4 right-4" />
        <h1 className="text-white font-bold text-8xl h-96">{title}</h1>
        <span className="text-white text-xl">{date}</span>
      </div>
    );
  } else {
    return <div>IMG</div>
  }
};