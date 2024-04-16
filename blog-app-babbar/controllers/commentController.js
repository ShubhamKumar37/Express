const Post = require("../models/PostModel");

exports.createComment = async (req, res) =>
{
    try
    {
        const {post, user, body} = req.body;
        const comment = new Comment({
            post, user, body
        });

        // using save() we can save to our database
        const savedComment = await comment.save();

        // This is will take the post id from the request body and use that id to find the respective post and then update its
        // comment array by adding the current comment id to the array.
        // $push is an operator like append function (Maybe for understanding only).
        // {new:true} will help to return the final updated document to us.
        // exec to execute the query.
        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {comment: savedComment._id}}, {new: true}).populate().exec();

        res.status(200).json({
            post: updatedPost,
        });
    }
    catch(Error)
    {
        return res.status(500).json({
            message: Error.message
        });
    }
}