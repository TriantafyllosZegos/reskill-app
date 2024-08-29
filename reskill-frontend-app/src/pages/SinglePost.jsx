import React from "react";
import { useLoaderData } from "react-router-dom";

const capitalizeFirstLetter = (str) => {
  if (!str) return str; // Handle empty or null strings
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

function SinglePost() {
  const { data } = useLoaderData();
  console.log(data);

  return (
    <>
      <div
        key={data.id}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-20 "
      >
        <div className="flex flex-col col-span-1 text-justify gap-4">
          <h1 className="font-[700] text-[64px] text-black  text-left">
            {capitalizeFirstLetter(data.title)}
          </h1>{" "}
          {/*TITLE*/}
          <h3 className="font-[400] text-[24px] text-[#828282]">
            <p>{capitalizeFirstLetter(data.subheader)}</p> {/*SUBHEADER */}
          </h3>
          <h2 className="font-[500] text-[20px]">
            {" "}
            {/*BODY */}
            <p className="text-left text-black">
              {capitalizeFirstLetter(data.paragraph1)}
            </p>
            <br />
            <p className="text-left text-black">{data.paragraph2}</p>
            <p className="text-left text-black">{data.paragraph3}</p>
          </h2>
        </div>
        <div className="flex col-span-1 lg:col-span-1 justify-end pl-0 md:pl-16 lg:pl-16 ">
          {/*IMAGE */}
          <img src={data.photo} alt="Photo" className="rounded-md" />
        </div>
      </div>
    </>
  );
}

export default SinglePost;
