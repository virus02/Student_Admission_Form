const express = require("express");
const mongoose = require("mongoose");

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

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on PORT ${port}`));
