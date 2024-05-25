import express from "express";
import path from "path";

const router = express.Router();

// scrapped solution
router.get("/image", async (req, res) => {
  const { url } = req.query;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch image");
    }

    res.download(path.resolve("image.png")); // Send the downloaded file to the client
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
