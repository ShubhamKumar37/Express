const blogSchema = require("../Models/blogSchema");

exports.createBlogPost = async (req, res) =>
{
    try
    {
        const {Title, Description} = req.body;
        const response = await blogSchema.create({Title, Description});

        res.status(200).json(
            {
                status: true,
                message: "Creation of post is successful",
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

exports.getBlogPost = async (req, res) =>
{
    try
    {
        const response = await blogSchema.find({});
        
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
                status: true,
                message: Error.message
            }
        );
    }
}