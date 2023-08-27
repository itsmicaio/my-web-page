import React from "react";

const Header = () => {
  return (
    <header className="bg-green w-full flex flex-col items-center mb-7">
      <a className="flex justify-center items-center gap-3" href="/">
        <img
          className="w-14 h-14 rounded-full"
          src="/uploads/avatar.jpeg"
          alt="Avatar Caio Fuzatto"
        />
        <h1 className="my-8 max-w-xs text-white text-2xl">Caio Fuzatto</h1>
      </a>
    </header>
  );
};

export default Header;
