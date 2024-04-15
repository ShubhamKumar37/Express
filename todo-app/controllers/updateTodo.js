const Todo = require("../Models/Todo");

exports.updateTodoById = async (req, res) =>
{
    try
    {
        const {id} = req.params;
        const {title, description} = req.body;
        const response = await Todo.findByIdAndUpdate({_id: id}, {title, description, udatedOn: Date.now()});

        if(!response)
        {
            return res.status(404).json(
                {
                    success: false,
                    message: "Id not found"
                }
            );
        }

        res.status(200).json(
            {
                success: true,
                message: `Data found and updated for id ${id}`,
                data: response
            }
        );
    }
    catch(Error)
    {
        res.status(500).json(
            {
                success: false,
                message: "Error while fetching the data"
            }
        );
    }
}