import React from "react";
import IntroPost from "../components/IntroPost";
import Posts from "../components/Posts";
import { useLoaderData } from "react-router-dom";

function Homepage() {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div>
      <IntroPost />
      <Posts posts={data} />
    </div>
  );
}

export default Homepage;
