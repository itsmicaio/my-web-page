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
    },
    javascript: {
      name: "JavaScript",
    },
    web: {
      name: "Web",
    },
    typescript: {
      name: "TypeScript",
    },
    "google-cloud": {
      name: "GCP",
    },
    aws: {
      name: "AWS",
    },
    frontend: {
      name: "FrontEnd",
    },
    backend: {
      name: "BackEnd",
    },
    tech: {
      name: "Tech",
    },
    nodejs: {
      name: "NodeJS",
    },
    react: {
      name: "React",
    }
  };

  const showTags = maxTags ? tags.slice(0, maxTags) : tags;
  const moreTags = maxTags && tags.length > maxTags && (
    <span>+{tags.length - maxTags}</span>
  );
  return (
    <div className={`flex items-center gap-2`}>
      {showTags.map((tag) => (
        <span
          key={tag}
          className={`font-bold text-xs rounded-md p-1 
          bg-gray-600 text-white group-hover:bg-green group-hover:text-gray-200 hover:bg-black`}
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
