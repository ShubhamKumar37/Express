const Todo = require("../Models/Todo");

exports.deleteTodoById = async (req, res) =>
{
    try 
    {
        const {id} = req.params;
        
        await Todo.findByIdAndDelete(id);

        res.status(200).json(
            {
                success: true,
                message: "Data deleted successfully"
            }
        )
    }

    catch(Error)
    {
        res.status(500).json(
            {
                success: false,
                message: "Data is not deleted"
            }
        )
    }
}