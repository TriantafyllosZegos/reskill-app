import React from "react";

const data = {
  title: "Title",
  author: "Author",
  thubnail:
    "https://s3-alpha-sig.figma.com/img/3d95/fb67/d04b74317b96ea419a09c006acd4250b?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fvgF32IN061HQihTy2vSkyGu-IesLuAoew6DholxXZyMCjbQVT3N4aSgwvEQFk86gphf0dtzUitJ1f9OlHHFThR5EQavwXqRnRODsPGg6ZJQ37F6Yz63jCEbPCAEU5WicXyG1-s-s9nN6nXJt35DRso9D8CZQfr4UBRgAnhvnmMKj-3S4X4O7WEm7qukP61dgP4YMh~g24GkkO4NK8BRs4uPIKoTUnkXj-ThBy7qIyjtvnx2YePvRqPW96wLiKZMcnS51UlU36vxAjlnqw2a-2Kod0ehKdC4lmxslRT7nE~v~RTBkdX~y6r7BV~8urDLNB~e1xVi0sZGNv70-QNJVA__",
};
function Posts() {
  return (
    <>
      <div className="flex flex-col gap-10 p-10">
        <h1 className="text-4xl font-bold">Related articles or posts</h1>
        <div className="flex flex-col ">
          <div className="flex flex-row ">
            <div className=" size-1/3">
              <a className="flex flex-col gap-1 ">
                <img
                  className="size-11/12 aspect-square rounded-lg"
                  src={data.thubnail}
                />
                <h3 className="text-black text-lg">{data.title}</h3>
                <h4 className="font-normal text-base text-gray-400">
                  {data.author}
                </h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Posts;
