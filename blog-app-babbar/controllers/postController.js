const Post = require("../models/postModel");

exports.createPost = async (req, res) =>
{
    try
    {
        const {title, body} = req.body;
        const newPost = new Post({title, body});

        const post = await newPost.save();

        res.status(200).json({
            status: true,
            data: post,
            message: "Post created succesfully"
        });
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

exports.getAllPost = async (req, res) =>
{
    try
    {
        const allPost = await Post.find();
        // if no like or comment found then .populate() will lead to a error

        if(!allPost)
        {
            return res.status(404).json(
                {
                    status: false,
                    message: "No post found"
                }
            );
        }

        res.status(200).json({
            status: true,
            data: allPost,
            message: "All post fetched succesfully"
        });
    }
    catch(Error)
    {
        return res.status(500).json(
            {
                status: false,
                Error: Error.message
            }
        );
    }
}