const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please enter username'],
    },
    email: {
      type: String,
      required: [true, 'Please enter email'],
    },
    password: {
      type: String,
      required: [true, 'Please enter password'],
    },
    avatar: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cosmetic',
      required: false,
      default: null,
    },
    cursor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cosmetic',
      required: false,
      default: null,
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
      default: [],
    },
    owned_experiences: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Experience',
      required: false,
      default: [],
    },
    owned_cosmetics: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Cosmetic',
      required: false,
      default: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;
