import React from "react";

function HeaderC() {
  return (
    <>
      <div
        className="xl: relative flex items-center justify-between px-4 py-4 sm:px-8 xl:gap-7
      xl:py-0 2xl:gap-0"
      >
        <div className="flex w-full max-w-[165px] items-center">
          <a className="inline-block" aria-label="Blog Logo" href="/">
            <h1 className="inline-block text-2xl sm:text-3xl  text-slate-900 tracking-tight dark:text-slate-200">
              Site Name
            </h1>
          </a>
        </div>
        <div className="order-2 flex flex-wrap items-center justify-end gap-6 xl:order-3 xl:w-auto">
          <ul className="flex justify-end gap-4 md:gap-14">
            <li className="hover:font-bold cursor-pointer">Home</li>
            <li className="hover:font-bold cursor-pointer">About</li>
            <li className="hover:font-bold cursor-pointer">Contact</li>
          </ul>
          <button>Button</button>
        </div>
      </div>
    </>
  );
}

export default HeaderC;
