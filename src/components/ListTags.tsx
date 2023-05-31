import React from "react";
import { Tag } from "../entities/Tag";

type IProps = {
  tags: Tag[];
  maxTags?: number;
};

const ListTags = ({ tags, maxTags }: IProps) => {
  const TagClasses = {
    aleatorio: {
      name: "Aleatório",
      classes: "text-white bg-red-600",
    },
    javascript: {
      name: "JavaScript",
      classes: "text-black bg-yellow-300",
    },
    web: {
      name: "Web",
      classes: "text-white bg-sky-700",
    },
    typescript: {
      name: "TypeScript",
      classes: "text-white bg-sky-600",
    },
    "google-cloud": {
      name: "GCP",
      classes:
        "p-0 px-1 text-gray-400 bg-white border-4 border-t-amber-500 border-r-red-600 border-b-blue-600 border-l-emerald-500",
    },
    aws: {
      name: "AWS",
      classes: "text-sky-950 bg-amber-600",
    },
    frontend: {
      name: "FrontEnd",
      classes: "text-white bg-fuchsia-700",
    },
    backend: {
      name: "BackEnd",
      classes: "text-white bg-lime-600",
    },
    tech: {
      name: "Tech",
      classes: "text-white bg-indigo-300",
    },
  };

  const showTags = maxTags ? tags.slice(0, maxTags) : tags;
  const moreTags = maxTags && tags.length > maxTags && (
    <span>+{tags.length - maxTags}</span>
  );
  return (
    <div className="flex items-center">
      {showTags.map((tag) => (
        <span
          key={tag}
          className={`p-1 font-bold text-xs rounded-md mx-1 group-hover:bg-black group-hover:text-white group-hover:border-black ${TagClasses[tag].classes}`}
          aria-label={`Tag ${tag}`}
        >
          {TagClasses[tag].name}
        </span>
      ))}
      {moreTags}
    </div>
  );
};

export default ListTags;
