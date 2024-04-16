const blogSchema = require("../Models/blogSchema");

exports.blogPostLike = async (req, res) =>
{
    try
    {
        const response = await blogSchema.find({Like: true});
        
        if(!response)
        {
            res.status(404).json(
                {
                    status: false,
                    message: "No data found"
                }
            );
        }
        
        res.status(200).json(
            {
                status: true,
                message: "These data are present in database",
                data: response
            }
        );
    }
    catch(Error)
    {
        res.status(500).json(
            {
                status: false,
                message: Error.message
            }
        );
    }
}
exports.blogPostDisLike = async (req, res) =>
{
    try
    {
        const response = await blogSchema.find({Like: false});
        
        if(!response)
        {
            res.status(404).json(
                {
                    status: false,
                    message: "No data found"
                }
            );
        }
        
        res.status(200).json(
            {
                status: true,
                message: "These data are present in database",
                data: response
            }
        );
    }
    catch(Error)
    {
        res.status(500).json(
            {
                status: false,
                message: Error.message
            }
        );
    }
}

exports.blogPostLikeUpdateById = async (req, res) =>
{
    try
    {
        const {id} = req.params;
        const response = await blogSchema.findByIdAndUpdate({_id:id}, {Like: true});
        res.status(200).json(
            {
                status: true,
                message: `This post is now liked for id ${id}`,
                data: response
            }
        );
    }
    catch(Error)
    {
        res.status(500).json(
            {
                status: false,
                message: Error.message
            }
        );
    }
}

exports.blogPostDisLikeUpdateById = async (req, res) =>
{
    try
    {
        const {id} = req.params;
        const response = await blogSchema.findByIdAndUpdate({_id:id}, {Like: false});
        res.status(200).json(
            {
                status: true,
                message: `This post is now disliked for id ${id}`,
                data: response
            }
        );
    }
    catch(Error)
    {
        res.status(500).json(
            {
                status: false,
                message: Error.message
            }
        );
    }
}
