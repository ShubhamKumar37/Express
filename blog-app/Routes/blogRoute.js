const express = require("express");
const router = express.Router();
const {createBlogPost, getBlogPost} = require("../Controllers/blogPost");
const {blogPostLike, blogPostLikeUpdateById, blogPostDisLikeUpdateById, blogPostDisLike} = require("../Controllers/blogPostLike");
const {blogPostCommentUpdateById} = require("../Controllers/commentPost");

router.post("/posts/create", createBlogPost);
router.get("/posts", getBlogPost);
router.get("/posts/likes/like", blogPostLike);
router.get("/posts/likes/dislike", blogPostDisLike);
router.put("/posts/likes/like/:id", blogPostLikeUpdateById);
router.put("/posts/likes/dislike/:id", blogPostDisLikeUpdateById);
router.put("/posts/comment/:id", blogPostCommentUpdateById);

module.exports = router;