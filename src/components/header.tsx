import React from "react";

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
        <h1 className="my-8 max-w-xs text-white text-2xl">Caio Fuzatto</h1>
      </a>
    </header>
    <div className="h-28"></div>
    </>
  );
};

export default Header;
