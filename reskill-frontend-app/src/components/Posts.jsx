import React from "react";

function Posts({ posts }) {
  return (
    <>
      <div className="flex flex-col gap-10 p-10">
        <h1 className="text-4xl font-bold">Related articles or posts</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((item) => (
            <div key={item.id}>
              <a className="flex flex-col ">
                <img
                  className=" aspect-square rounded-lg"
                  src={item.thumbnail}
                />
                <h3 className="text-black text-lg">{item.title}</h3>
                <h4 className="font-normal text-base text-gray-400">Daffy</h4>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Posts;
