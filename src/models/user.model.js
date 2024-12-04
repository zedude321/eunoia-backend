const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter username"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
    },
    avatar: {
      type: String,
      required: false,
      default: 'img1'
    },
    hints: {
      type: Number,
      required: false,
      default: 0,
    },
    friends: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'User',
      required: false,
      default: []
    },
    owned_experiences: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Experience',
      required: false,
      default: [],
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
