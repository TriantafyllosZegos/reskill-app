import React, { useEffect, useState } from "react";
import IntroPost from "../components/IntroPost";
import Posts from "../components/Posts";
import axios from "axios";

function Homepage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts"); // Adjust the URL as needed
        setPosts(response.data);
      } catch (error) {
        setError("Error fetching posts");
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <IntroPost />
      <Posts posts={posts} />
    </div>
  );
}

export default Homepage;
