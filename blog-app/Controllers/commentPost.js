const blogSchema = require("../Models/blogSchema");

exports.blogPostCommentUpdateById = async (req, res) =>
{
    try
    {
        const {id} = req.params;
        const {Comment} = req.body;
        const response = await blogSchema.findByIdAndUpdate({_id:id}, {Comment, UpdatedAt: Date.now()});
        res.status(200).json(
            {
                status: true,
                message: `Comment is updated of post for id ${id}`,
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