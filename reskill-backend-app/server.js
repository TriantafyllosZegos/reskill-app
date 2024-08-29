const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/posts", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 9; // Get the limit from query params, default to 10

    const [postsResponse, photosResponse] = await Promise.all([
      axios.get("https://jsonplaceholder.typicode.com/posts"),
      axios.get("https://jsonplaceholder.typicode.com/photos"),
    ]);

    const posts = postsResponse.data.slice(0, limit); // Limit the number of posts
    const photos = photosResponse.data;

    const combinedData = posts.map((post) => {
      const matchingPhoto = photos.find((photo) => photo.id === post.id);

      return {
        userId: post.userId,
        id: post.id,
        title: post.title,
        thumbnail: matchingPhoto ? matchingPhoto.thumbnailUrl : null,
      };
    });

    res.json(combinedData);
  } catch (error) {
    console.error("Error fetching or posting data:", error);
    res.status(500).json({ error: "Failed to fetch or post data" });
  }
});

app.get("/post/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const [postResponse, photoResponse] = await Promise.all([
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`),
      axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`),
    ]);

    const post = postResponse.data;
    const photo = photoResponse.data;

    const [subheader = "", paragraph1 = "", paragraph2 = "", paragraph3 = ""] =
      post.body.split("\n");

    const combinedData = {
      userId: post.userId,
      id: post.id,
      title: post.title,
      subheader,
      paragraph1,
      paragraph2,
      paragraph3,
      photo: photo.url,
    };

    res.json(combinedData);
  } catch (error) {
    console.error("Error fetching the post or photo data:", error);
    res.status(500).json({ error: "Failed to fetch the post or photo data" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
