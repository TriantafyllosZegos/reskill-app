import React from "react";

const capitalizeFirstLetter = (str) => {
  if (!str) return str; // Handle empty or null strings
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

function Posts({ posts }) {
  return (
    <>
      <div className="flex flex-col gap-10 p-10">
        <h1 className="text-black text-4xl font-bold">
          Related articles or posts
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {posts.map((item) => (
            <div key={item.id}>
              <a className="flex flex-col gap-1" href="/singlepost/${item.id}">
                <img
                  className=" aspect-square rounded-lg "
                  src={item.thumbnail}
                />

                <h3 className="text-black text-lg">
                  {capitalizeFirstLetter(item.shortTitle)}
                </h3>
                <h4 className="font-normal text-base text-[#828282]">Daffy</h4>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Posts;
