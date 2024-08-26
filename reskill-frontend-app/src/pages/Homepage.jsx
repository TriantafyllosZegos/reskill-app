import React, { Suspense} from "react";
import IntroPost from "../components/IntroPost";
import Posts from "../components/Posts";
import { useLoaderData, Await} from "react-router-dom";

function Homepage() {
  const {data} = useLoaderData();
  console.log(data);
  return (
    <div>
      <IntroPost />
        {/* <Suspense fallback={<h1>Loading...</h1>}>
          <Await resolve={data}>{(resolvedPosts) => (
            <Posts posts={resolvedPosts}  />
          )} */}
          <Posts posts={data}  />
          {/* </Await>
        </Suspense> */}
    </div>
  );
}

export default Homepage;
