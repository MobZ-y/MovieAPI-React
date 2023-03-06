const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    message: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
    likers: {
      type: [String],
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("post", postSchema);
