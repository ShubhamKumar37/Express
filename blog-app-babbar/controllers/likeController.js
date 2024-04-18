const Like = require("../models/likeModel");
const Post = require("../models/postModel");

exports.likePost = async (req, res) =>
{
    try
    {
        const {post, user} = req.body;
        const newLike = new Like({post, user});

        const likeUpdate = await newLike.save();

        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: likeUpdate._id}}, {new: true}).populate("likes").populate("comments").exec();

        res.status(200).json(updatedPost);
    }
    catch(Error)
    {
        return res.status(500).json({message: "Something went wrong"});
    }
}

exports.disLikePost = async (req, res) =>
{
    try
    {
        const {post, like} = req.body;

        const updatedLike = await Like.findOneAndDelete({post: post, _id: like});
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: updatedLike._id}}, {new:true}).exec();

        return res.status(200).json(
            {
                status: true,
                message: "Disliked the post",   
                data: updatedPost
            }
        );
    }
    catch(Error)
    {
        return res.status(500).json(
            {
                status: false,
                message: Error.message
            }
        );
    }
}