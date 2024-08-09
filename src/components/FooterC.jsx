import React from "react";
import TopicList from "./TopicList";

function FooterC() {
  return (
    <>
      <div className="footerContainer">
        <hr />
        <div>
          <div className="xl:relative flex items-center justify-between px-16 py-10 sm:px-8 xl:gap-7">
            <div className="flex w-full max-w-[165px] items-center">
              <h1 className=" inline-block text-lg text-slate-900 tracking-tight dark:text-slate-200">
                <a
                  className="text-black inline-block"
                  aria-label="Blog Logo"
                  href="/"
                >
                  Site Name
                </a>
              </h1>
            </div>
            <TopicList />
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterC;
