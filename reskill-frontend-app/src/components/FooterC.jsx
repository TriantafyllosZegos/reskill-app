import React from "react";

function FooterC() {
  return (
    <>
      <div className="p-10 ">
        <hr />
        <div className="py-10 grid grid-cols-2 gap-8">
          <div className="col-span-1">
            <LeftSide />
          </div>
          <div className="col-span-1">
            <RightSide />
          </div>
        </div>
      </div>
    </>
  );
}

const LeftSide = () => (
  <div className="flex flex-col items-start gap-20">
    <div>
      <h1 className=" inline-block text-lg text-slate-900 tracking-tight dark:text-slate-200">
        <a className="text-black inline-block" aria-label="Blog Logo" href="/">
          Site Name
        </a>
      </h1>
    </div>
    <div className="flex flex-row  gap-1 items-center">
      <a
        className="hover:scale-125 delay-75 font-bold cursor-pointer"
        href="https://www.facebook.com/zuck/"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 10.04C14.5 10.04 10 14.53 10 20.06C10 25.06 13.66 29.21 18.44 29.96V22.96H15.9V20.06H18.44V17.85C18.44 15.34 19.93 13.96 22.22 13.96C23.31 13.96 24.45 14.15 24.45 14.15V16.62H23.19C21.95 16.62 21.56 17.39 21.56 18.18V20.06H24.34L23.89 22.96H21.56V29.96C23.9164 29.5879 26.0622 28.3856 27.6099 26.5701C29.1576 24.7546 30.0054 22.4457 30 20.06C30 14.53 25.5 10.04 20 10.04Z"
            fill="#828282"
          />
        </svg>
      </a>
      <a
        className="hover:scale-125 delay-75 font-bold cursor-pointer"
        href="https://www.linkedin.com/"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
            fill="#828282"
          />
        </svg>
      </a>
      <a
        className="hover:scale-125 delay-75 font-bold cursor-pointer"
        href="https://www.youtube.com/"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 23L23.19 20L18 17V23ZM29.56 15.17C29.69 15.64 29.78 16.27 29.84 17.07C29.91 17.87 29.94 18.56 29.94 19.16L30 20C30 22.19 29.84 23.8 29.56 24.83C29.31 25.73 28.73 26.31 27.83 26.56C27.36 26.69 26.5 26.78 25.18 26.84C23.88 26.91 22.69 26.94 21.59 26.94L20 27C15.81 27 13.2 26.84 12.17 26.56C11.27 26.31 10.69 25.73 10.44 24.83C10.31 24.36 10.22 23.73 10.16 22.93C10.09 22.13 10.06 21.44 10.06 20.84L10 20C10 17.81 10.16 16.2 10.44 15.17C10.69 14.27 11.27 13.69 12.17 13.44C12.64 13.31 13.5 13.22 14.82 13.16C16.12 13.09 17.31 13.06 18.41 13.06L20 13C24.19 13 26.8 13.16 27.83 13.44C28.73 13.69 29.31 14.27 29.56 15.17Z"
            fill="#828282"
          />
        </svg>
      </a>
      <a
        className="hover:scale-125 delay-75 font-bold cursor-pointer"
        href="https://www.instagram.com/"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8 10H24.2C27.4 10 30 12.6 30 15.8V24.2C30 25.7383 29.3889 27.2135 28.3012 28.3012C27.2135 29.3889 25.7383 30 24.2 30H15.8C12.6 30 10 27.4 10 24.2V15.8C10 14.2617 10.6111 12.7865 11.6988 11.6988C12.7865 10.6111 14.2617 10 15.8 10ZM15.6 12C14.6452 12 13.7295 12.3793 13.0544 13.0544C12.3793 13.7295 12 14.6452 12 15.6V24.4C12 26.39 13.61 28 15.6 28H24.4C25.3548 28 26.2705 27.6207 26.9456 26.9456C27.6207 26.2705 28 25.3548 28 24.4V15.6C28 13.61 26.39 12 24.4 12H15.6ZM25.25 13.5C25.5815 13.5 25.8995 13.6317 26.1339 13.8661C26.3683 14.1005 26.5 14.4185 26.5 14.75C26.5 15.0815 26.3683 15.3995 26.1339 15.6339C25.8995 15.8683 25.5815 16 25.25 16C24.9185 16 24.6005 15.8683 24.3661 15.6339C24.1317 15.3995 24 15.0815 24 14.75C24 14.4185 24.1317 14.1005 24.3661 13.8661C24.6005 13.6317 24.9185 13.5 25.25 13.5ZM20 15C21.3261 15 22.5979 15.5268 23.5355 16.4645C24.4732 17.4021 25 18.6739 25 20C25 21.3261 24.4732 22.5979 23.5355 23.5355C22.5979 24.4732 21.3261 25 20 25C18.6739 25 17.4021 24.4732 16.4645 23.5355C15.5268 22.5979 15 21.3261 15 20C15 18.6739 15.5268 17.4021 16.4645 16.4645C17.4021 15.5268 18.6739 15 20 15ZM20 17C19.2044 17 18.4413 17.3161 17.8787 17.8787C17.3161 18.4413 17 19.2044 17 20C17 20.7956 17.3161 21.5587 17.8787 22.1213C18.4413 22.6839 19.2044 23 20 23C20.7956 23 21.5587 22.6839 22.1213 22.1213C22.6839 21.5587 23 20.7956 23 20C23 19.2044 22.6839 18.4413 22.1213 17.8787C21.5587 17.3161 20.7956 17 20 17Z"
            fill="#828282"
          />
        </svg>
      </a>
    </div>
  </div>
);

const RightSide = () => (
  <div className="flex flex-row  items-start justify-between ">
    <div className="flex flex-col  gap-3">
      <span className="text-xl font-bold">Topic</span>
      <a className="hover:font-bold cursor-pointer text-black" href="/">
        <span>Page</span>
      </a>
      <a className="hover:font-bold cursor-pointer text-black" href="/">
        <span>Page</span>
      </a>
      <a className="hover:font-bold cursor-pointer text-black" href="/">
        <span>Page</span>
      </a>
    </div>
    <div className="flex flex-col gap-3">
      <span className="text-xl font-bold">Topic</span>
      <a className="hover:font-bold cursor-pointer text-black" href="/">
        <span>Page</span>
      </a>
      <a className="hover:font-bold cursor-pointer text-black" href="/">
        <span>Page</span>
      </a>
      <a className="hover:font-bold cursor-pointer text-black" href="/">
        <span>Page</span>
      </a>
    </div>
    <div className="flex flex-col gap-3 ">
      <span className="text-xl font-bold">Topic</span>
      <a className="hover:font-bold cursor-pointer text-black" href="/">
        <span>Page</span>
      </a>
      <a className="hover:font-bold cursor-pointer text-black" href="/">
        <span>Page</span>
      </a>
      <a className="hover:font-bold cursor-pointer text-black" href="/">
        <span>Page</span>
      </a>
    </div>
  </div>
);

export default FooterC;
