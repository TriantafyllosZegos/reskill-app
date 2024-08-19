import React from "react";

function HeaderC() {
  return (
    <>
      <div className="flex flex-row gap-10 justify-between p-10 items-center">
        <LeftSide />
        <RightSide />
      </div>
    </>
  );
}

const LeftSide = () => (
  <div className="flex flex-col gap-6">
    <h1 className="text-xl font-bold text-black">
      <a className="text-black inline-block" aria-label="Blog Logo" href="/">
        Site Name
      </a>
    </h1>
  </div>
);
const RightSide = () => (
  <div className="flex flex-row  ">
    <ul className="flex  gap-6 items-center">
      <li>
        <a
          className="hover:font-bold font-bold cursor-pointer text-black"
          href="/"
        >
          <span>Home</span>
        </a>
      </li>
      <li>
        <a
          className="hover:font-bold font-bold cursor-pointer text-black"
          href="/about"
        >
          <span>About</span>
        </a>
      </li>
      <li>
        <a
          className="hover:font-bold font-bold cursor-pointer text-black"
          href="/contact"
        >
          <span>Contact</span>
        </a>
      </li>
      <li>
        <button className="text-white bg-black">Button</button>
      </li>
    </ul>
  </div>
);

export default HeaderC;
