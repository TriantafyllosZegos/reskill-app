import React from "react";
import { Link } from "react-router-dom";

const capitalizeFirstLetter = (str) => {
  if (!str) return str; // Handle empty or null strings
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

function Posts({ posts }) {
  return (
    <>
      <div className="flex flex-col gap-8 p-12">
        <h1 className="text-black text-4xl font-bold">
          Related articles or posts
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {posts.map((item) => (
            <div key={item.id} className="flex flex-col ">
              <Link
                className="flex flex-col  hover:scale-105 transition-transform "
                to={`/singlepost/${item.id}`}
              >
                <img
                  className=" aspect-square rounded-lg  "
                  src={item.thumbnail}
                />
              </Link>
              <div className="flex flex-col justify-between flex-grow pt-6 h-full">
                <h3 className="text-black font-semibold text-lg">
                  {capitalizeFirstLetter(item.title)}
                </h3>
                <h4 className="font-normal text-base text-[#828282]">
                  Autor No.{item.userId}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Posts;
