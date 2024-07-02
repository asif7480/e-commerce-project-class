const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const errorMiddleware = require("./middlewares/errorMiddleware");

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api/auth", require("./routes/authRoute"));

app.use(errorMiddleware);

app.listen(port, () => console.log(`Server is running at port: ${port}`));
