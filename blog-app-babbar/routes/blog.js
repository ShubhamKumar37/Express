const express = require("express");
const route = express.Router();

const {createPost, getAllPost} = require("../controllers/postController");
const { createComment } = require("../controllers/commentController");
const {likePost, disLikePost} = require("../controllers/likeController");

route.post("/posts/create", createPost);
route.get("/posts", getAllPost);
route.post("/comments/create", createComment);
route.post("/likes/like", likePost);
route.put("/likes/dislike", disLikePost);

module.exports = route;