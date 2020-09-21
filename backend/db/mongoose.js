const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err.message));
