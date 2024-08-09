import React from "react";

function TopicList() {
  return (
    <>
      <div className="TopicList">
        <div className="grid grid-cols-2 gap-5 px--4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <ul className="">
              <li>
                <span className="text-lg font-bold">Topic</span>
              </li>
              <li>
                <a
                  className="hover:font-bold cursor-pointer text-black"
                  href="/"
                >
                  <span>Page</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:font-bold cursor-pointer text-black"
                  href="/"
                >
                  <span>Page</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:font-bold cursor-pointer text-black"
                  href="/"
                >
                  <span>Page</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopicList;
