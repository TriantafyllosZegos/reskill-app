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

  if (id === "9999") {
    const specialData = {
      userId: 1,
      id: 9999,
      title: "Single Post",
      subheader: "Subheading for description or instructions",
      paragraph1:
        "Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:",
      paragraph2:
        "Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure.",
      paragraph3:
        "Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.",
      photo:
        "https://s3-alpha-sig.figma.com/img/031d/ee8a/d390261e0a59354a086f7e9a9be4cb3b?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nNDaU2NXH1y2IHxhWvuZJMz0FGhBtSkrmJ1XAU2PASKaxDu81Mp~1bZII05vrrnA78vTLKGwFZYL9z9RNn4B~eOmSKZ0mU-C3oRfFZ2v84rDtoEbKzGP46RbuCZGifeT5KdwP1r1Gr8nyClckW2wgm2Ay8tHhh4JzbutmJzwl5bFDehuEiGHW1AYV28a0FbfEDaZDlNO37J~4MbI5irOL2uVs6POPljJ7y~gBSwTgGfIBbJVacFvDGngAmXMqZQTGwSSsKrGxrH8XLKsZcCgz-tHAimYw5-Y1RMBNZo1Uqz~wHxo3y0M1ykELLqm4Kmjyjabz7KInSAUx6lJY1IiOQ__",
    };

    return res.json(specialData);
  }

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
