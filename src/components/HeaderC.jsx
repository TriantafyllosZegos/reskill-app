import React from "react";

function HeaderC() {
  return (
    <>
      <div className="headerContainer gap-6">
        <div className="xl:relative flex items-center justify-between ml-10 mr-10 mt-10 mb-10 ">
          <div className="flex w-full max-w-[165px] items-center">
            <h1 className="inline-block text-lg text-slate-900 tracking-tight dark:text-slate-200">
              <a
                className="text-black inline-block"
                aria-label="Blog Logo"
                href="/"
              >
                Site Name
              </a>
            </h1>
          </div>
          <div className="order-2 flex flex-wrap items-center justify-end gap-6 xl:order-3 xl:w-auto ">
            <ul className="flex justify-end gap-4 md:gap-8 items-center">
              <li>
                <a
                  className="hover:font-bold cursor-pointer text-black"
                  href="/"
                >
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:font-bold cursor-pointer text-black"
                  href="/about"
                >
                  <span>About</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:font-bold cursor-pointer text-black"
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
        </div>
      </div>
    </>
  );
}

export default HeaderC;
