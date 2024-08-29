import React from "react";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";

function IntroPost() {
  return (
    <>
      <div className="introPost">
        <div className="flex flex-col gap-10  p-10">
          <div>
            <h1 className="font-bold text-black">Posts List</h1>
            <br />
            <h4 className="text-[#828282] text-xl">
              Subheading that sets up context, shares more info about the <br />
              author, or generally gets people psyched to keep reading
            </h4>
            <img className="pt-10 rounded-md size-full" src={image1}></img>
          </div>
          <BodyTextUp />
          <BodyImages />
          <BodyTextDown />
        </div>
      </div>
    </>
  );
}

const BodyTextUp = () => (
  <div className="flex flex-col gap-6 py-10 lg:px-52 md:px-32  text-black text-l lg:text-xl font-semibold ">
    <p>
      Body text for your whole article or post. We’ll put in some lorem ipsum to
      show how a filled-out page might look:
    </p>
    <p>
      Excepteur efficient emerging, minim veniam anim aute carefully curated
      Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui
      international first-class nulla ut. Punctual adipisicing, essential lovely
      queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian
      impeccable aute quality of life soft power pariatur Melbourne occaecat
      discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable
      officia Helsinki excepteur Basset hound. Zürich sleepy perfect
      consectetur.
    </p>
    <p>
      Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa
      esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud
      delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt
      intricate airport handsome K-pop excepteur classic esse Asia-Pacific
      laboris.
    </p>
  </div>
);
const BodyImages = () => (
  <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-rows-1 gap-6">
    <img
      alt="canoe sunny"
      className="rounded-lg "
      src={image2}
      loading="lazy"
    ></img>
    <img
      alt="canoe foggy"
      className="rounded-lg "
      src={image3}
      loading="lazy"
    ></img>
  </div>
);
const BodyTextDown = () => (
  <div className="flex flex-col gap-6 lg:py-10 lg:px-52 md:px-32 text-black text-l lg:text-xl font-semibold">
    <p>
      Excepteur efficient emerging, minim veniam anim cloying aute carefully
      curated gauche. Espresso exquisite perfect nostrud nisi intricate.
      Punctual adipisicing Borzoi, essential lovely tempor eiusmod irure.
      Exclusive izakaya charming Quezon City impeccable aute quality of life
      soft power pariatur occaecat discerning. Qui wardrobe aliquip, et Amadeus
      rock opera.
    </p>
    <p>
      Exquisite sophisticated iconic cutting-edge laborum deserunt esse bureaux
      cupidatat id minim. Sharp classic the best commodo nostrud delightful.
      Conversation aute wifey id. Qui sunt remarkable deserunt intricate airport
      excepteur classic esse riot girl.
    </p>
  </div>
);

export default IntroPost;
