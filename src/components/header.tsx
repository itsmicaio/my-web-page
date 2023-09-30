import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="bg-green w-full flex flex-col items-center fixed top-0 left-0 shadow-md">
        <a className="flex justify-center items-center gap-3" href="/">
          <img
            className="w-14 h-14 rounded-full border-solid border-white border-[1px]"
            src="/uploads/avatar.png"
            alt="Avatar Caio Fuzatto"
          />
          <h1 className="mt-8 mb-2 max-w-xs text-white text-2xl">
            Caio Fuzatto
          </h1>
        </a>
        <div className="flex w-full max-w-sm justify-between my-2 px-3 text-white">
          <a
            href="https://www.linkedin.com/in/itsmicaio/"
            target="_blank"
            className="flex"
          >
            <FaLinkedin className="h-4 w-4 mr-1" />
            LinkedIn
          </a>
          <a
            href="https://github.com/itsmicaio"
            target="_blank"
            className="flex"
          >
            <FaGithub className="h-4 w-4 mr-1" />
            Github
          </a>
          <a
            href="https://www.instagram.com/itsmicaio/"
            target="_blank"
            className="flex"
          >
            <FaInstagram className="h-4 w-4 mr-1" />
            Instagram
          </a>
        </div>
      </header>
      <div className="h-28"></div>
    </>
  );
};

export default Header;
