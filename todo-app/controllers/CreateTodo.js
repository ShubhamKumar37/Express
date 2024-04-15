const Todo = require('../Models/Todo');

exports.createTodo = async (req, res) =>
{
    try
    {
        const {title, description} = req.body;
        const response = await Todo.create({title, description});

        res.status(200).json({
            success: true,
            data: response,
            message: "Entry is successful"
        });
    }
    catch(Error)
    {
        console.log("Error in creating a entry");
        res.status(500).json({
            success: false,
            data: "Error in entry",
            message: Error.message
        });
    }
}