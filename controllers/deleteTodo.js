const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const response = await Todo.findByIdAndDelete(id);

        !response ?
            res.status(404).json({
                success: false,
                data: "Record not found",
                message: "Record not found"
            }) :
            res.status(200).json({
                success: true,
                data: response,
                message: "Todo deleted successfully"
            })
    } catch (error) {
        res.status(503).json({
            success: false,
            data: "Internal error",
            message: "Something went wrong"
        })
    }
}