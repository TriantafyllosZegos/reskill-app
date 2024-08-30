import React from "react";

function HeaderC() {
  return (
    <>
      <div className="py-14 px-12 md:p-12 lg:p-20  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:gap-10 ">
        <div className=" md:col-span-1  lg:col-span-3">
          <LeftSide />
        </div>

        <div className="col-span-1  lg:col-span-2 ">
          <RightSide />
        </div>
      </div>
    </>
  );
}

const LeftSide = () => (
  <div className="py-5 lg:py-0 md:py-0  flex flex-col">
    <h1 className="text-xl font-bold text-black tracking-tight">
      <a
        className="text-black font-[400] text-[24px] inline-block "
        aria-label="Blog Logo"
        href="/"
      >
        Site Name
      </a>
    </h1>
  </div>
);
const RightSide = () => (
  <div className="flex flex-col tracking-tight">
    <ul className="flex flex-row justify-start md:justify-end lg:justify-end gap-5 md:gap-6 lg:gap-7 items-center">
      <li>
        <a
          className="hover:font-bold font-[500] text-[20px] cursor-pointer text-black"
          href="/"
        >
          <span>Home</span>
        </a>
      </li>
      <li>
        <a
          className="hover:font-bold font-[500] text-[20px] cursor-pointer text-black"
          href="/about"
        >
          <span>About</span>
        </a>
      </li>
      <li>
        <a
          className="hover:font-bold font-[500] text-[20px] cursor-pointer text-black"
          href="/contact"
        >
          <span>Contact</span>
        </a>
      </li>
      <li>
        <button className="text-white bg-black hover:bg-gray-600  hover:text-white">
          Button
        </button>
      </li>
    </ul>
  </div>
);

export default HeaderC;
