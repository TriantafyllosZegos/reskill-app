import React, { useState, useEffect } from "react";
import axios from "axios";
import IntroPost from "../components/IntroPost";
import Posts from "../components/Posts";
import Loader from "../components/Loader";
// import { useLoaderData } from "react-router-dom";

// const { data } = useLoaderData();
// console.log(data);

function Homepage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts?limit=9");
        setPosts(response.data);
      } catch (err) {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); 

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      <IntroPost />
      <Posts posts={posts} />
    </div>
  );
}

export default Homepage;
