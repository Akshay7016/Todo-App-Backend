const Todo = require("../models/Todo")
exports.getTodo = async (req, res) => {
    try {
        const response = await Todo.find({});

        res.status(200).json({
            success: true,
            data: response,
            message: "Data retrived successfully"
        });
    } catch (error) {
        res.status(503).json({
            success: false,
            data: "Server error",
            message: "Something went wrong!"
        })
    }
}