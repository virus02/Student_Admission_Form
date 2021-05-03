const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

//body parser middleware
app.use(express.json());

//DB config
const db = config.get("mongoURI");

//DB Connection
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

//Use routes
app.use("/api/students", require("./routes/api/students"));
app.use("/api/users", require("./routes/api/users"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on PORT ${port}`));
