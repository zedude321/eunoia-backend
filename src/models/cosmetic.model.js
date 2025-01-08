const mongoose = require('mongoose');

const CosmeticSchema = mongoose.Schema(
  {
    cosmetic_type: {
      type: String,
      enum: ['avatar', 'cursor'],
      required: [true, 'Please enter cosmetic type'],
    },
    image: {
      type: String,
      required: [true, 'Please enter image'],
    },
  },
  { timestamps: true }
);

const Cosmetic = mongoose.model('Cosmetic', CosmeticSchema);
module.exports = Cosmetic;
