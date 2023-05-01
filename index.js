const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());

// import routes
const todoRoutes = require("./routes/todo");
app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
    console.log(`Server started successfullyt at port ${PORT}`);
});

//connect to the database
const dbConnect = require("./config/database")
dbConnect();

app.get("/", (req, res) => {
    res.send("Hello Akshay")
})