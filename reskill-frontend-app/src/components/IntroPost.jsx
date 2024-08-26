import React from "react";

function IntroPost() {
  return (
    <>
      <div className="introPost">
        <div className="flex flex-col gap-10  p-10">
          <div>
            <h1 className="font-bold text-black">Posts List</h1>
            <br />
            <h4 className="text-gray-500 text-xl">
              {/* Can take var depending !!! */}
              Subheading that sets up context, shares more info about the <br />
              author, or generally gets people psyched to keep reading
            </h4>
            <img
              className="pt-10 rounded-lg size-full"
              src="https://s3-alpha-sig.figma.com/img/1481/875b/94ba2048fe9940fe0061a0819ceed048?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9pLg7AHjOgWLHgvKdK0XRqxqZwdCSvz83bq5bbWBGcWHjJcf19VZExYqLwAveEZYIGV1b-b-JCBzqnUrjzO0Vs9EGzy2KGc-ZBmoEBp5oNsb2vc3BGu1y1~9nEJDFLvL~n~8926Dkx31Y1MHFdYloD6y8DeSy86-2ppD8F~2aBsKNRk6tI9rkeZtvn5TS9VtD~~ebtFoxCSwIzuUrQcNyipzp5E6Y~xP-7H65Pz2L55zNj2aOsuRR2iaC0LOpxqFHiixlS6Qm9DgPG1Ipiz29DGfN8UCxWYhDOAKgUAg4XQDTjZsFoPE7xx-HHMeN0P1~Wl8kDUwLdoIL~QMrS-Nw__"
            ></img>
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
  <body className="flex flex-col gap-6 py-10 lg:pr-52 lg:pl-52 text-xl font-semibold ">
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
  </body>
);
const BodyImages = () => (
  <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-rows-1 gap-6">
    <img
      alt="canoe sunny"
      className="rounded-lg "
      src="https://s3-alpha-sig.figma.com/img/01f1/1c37/e0ab433c61f442ca93a32acb917178ed?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EGLYP-pFFVtJaOUBRMHhmzG--ms71ehUr-pQsplvlIqAjM8UDIK7OMeS08S5X-1kiyGphrHGxYHj7wwAPWL3KlKaBQERTxK1-3I2kRmRYZInBqO-BhwU9uBb-X27W2h-Ey3vsIuPWpVxxROTMkuvRKcGO-HTa39eNUMkvrsbVRczdDDSDNMr6-e-zXvZ4iOghEau4OYq38hW3XEqst6x4ihOO17g8MypDXsPqw2QT7fZ61jcDifF4BH~Hw~PrNC-fodTM1qPmxjLMUKnpRaJL4b5t4r~~BxX4Nn7ddav9xEOqpBFfnowPr5AKDrBVtLKuhZ554D1rev4QbWZJKvgZw__"
    ></img>
    <img
      alt="canoe foggy"
      className="rounded-lg "
      src="https://s3-alpha-sig.figma.com/img/e627/001c/1005cc3458de9e392a25afc30a634e1d?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IaK0x15yp3V9V1vM6RSf245oNb2Gu-95SsA4wRgDHrlZLH6CY4ND44bLmWOvTJ6uHP-Kdml0HTboBT4EfMkO~9dvHK3Vh1saRMi2KrETlEBVB4Z3JavJTKJ-Dwk5-GmtSvpha294o9jdOa-cceJAmA8rII0IOUowKa84g1swIYi54Toadsh1de8rS9MqaNgMonugm2i7q0cgpyxL7z-ACNS9nNtix4vYFsO2bG5w7fP-CVEvmhc7iF-xvEUMyVKJ2cYDnqPvjd3L3lQNUipCGMS9Z7dArVHhGkje3EkGcqt6sCx01ta0Nr5RXFGDET0t7QfsiU5hcEUjOVJdDDfEpA__"
    ></img>
  </div>
);
const BodyTextDown = () => (
  <body className="flex flex-col gap-6 lg:py-10 lg:pr-52 lg:pl-52 text-xl font-semibold">
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
  </body>
);

export default IntroPost;
