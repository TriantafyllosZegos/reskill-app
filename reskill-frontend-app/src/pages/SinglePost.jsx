import React from "react";

function SinglePost({
  id,
  title,
  subheader,
  paragraph1,
  paragraph2,
  paragraph3,
  photo,
}) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-10 ">
        <div className="flex flex-col col-span-1 lg:col-span-1 text-justify gap-4">
          <h1 className="font-bold text-black ">{title}</h1> {/*TITLE*/}
          <h3 className="font-normal text-[#828282]">
            <p>{subheader}</p> {/*SUBHEADER */}
          </h3>
          <h2 className="text-sm font-semibold">
            {" "}
            {/*BODY */}
            <p className="text-left text-base text-black">{paragraph1}</p>
            <br />
            <p className="text-left text-base text-black">{paragraph2}</p>
            <p className="text-left text-base text-black">{paragraph3}</p>
          </h2>
        </div>
        <div className="flex col-span-1 lg:col-span-1 justify-end md:ps-16 lg:ps-16 ">
          {/*IMAGE */}
          <img src={photo} alt="Photo" className="rounded-md" />
        </div>
      </div>
    </>
  );
}

export default SinglePost;
