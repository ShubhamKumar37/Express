// import the model
const Todo = require("../models/Todo");

// define route handler
exports.createTodo = async(Req, Res) =>
{
    try
    {
        // extract title and Description from request body
        const {Title, Description} = Req.body;

        // Create a new todo object and insert to DB
        const Response = await Todo.create({Title, Description});

        //send a json response as the success flag 
        Res.status(200).json(
            {
                success:true,
                data:Response,
                message:'Entry created successfully'
            }
        )
    }

    catch(Error)
    {
        console.log("Error ho gaya bhaiya");
        Res.status(500).json({
            success:false,
            data:"Internal Server Problem",
            message:Error.message,
        })
    }
}