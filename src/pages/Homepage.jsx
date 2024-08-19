import React from "react";
import HeaderC from "../components/HeaderC";
import IntroPost from "../components/IntroPost";
import Posts from "../components/Posts";
import FooterC from "../components/FooterC";

const title = "Title";
const author = "Author";
const thubnail =
  "https://s3-alpha-sig.figma.com/img/3d95/fb67/d04b74317b96ea419a09c006acd4250b?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fvgF32IN061HQihTy2vSkyGu-IesLuAoew6DholxXZyMCjbQVT3N4aSgwvEQFk86gphf0dtzUitJ1f9OlHHFThR5EQavwXqRnRODsPGg6ZJQ37F6Yz63jCEbPCAEU5WicXyG1-s-s9nN6nXJt35DRso9D8CZQfr4UBRgAnhvnmMKj-3S4X4O7WEm7qukP61dgP4YMh~g24GkkO4NK8BRs4uPIKoTUnkXj-ThBy7qIyjtvnx2YePvRqPW96wLiKZMcnS51UlU36vxAjlnqw2a-2Kod0ehKdC4lmxslRT7nE~v~RTBkdX~y6r7BV~8urDLNB~e1xVi0sZGNv70-QNJVA__";

function Homepage() {
  return (
    <div>
      {/* header */}
      <HeaderC />
      {/* Intro */}
      <IntroPost />
      {/* Posts */}
      <Posts />
      {/* Footer */}
      <FooterC />
    </div>
  );
}

export default Homepage;
