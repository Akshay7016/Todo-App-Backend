const Todo = require("../models/Todo");

exports.updateTodoById = async (req, res) => {
    try {
        const { title, description } = req.body;
        const { id } = req.params;

        const response = await Todo.findByIdAndUpdate(id, {
            title,
            description,
            updatedAt: Date.now()
        });

        !response ?
            res.status(404).json({
                success: false,
                data: "Record not found",
                message: "Record not found"
            }) :
            res.status(200).json({
                success: true,
                data: response,
                message: "Todo updated successfully"
            })
    } catch (error) {
        res.status(503).json({
            success: false,
            data: "Internal error",
            message: "Something went wrong"
        })
    }
}