const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema(
  {
    item_name: {
      type: String,
      required: [true, 'Please enter item_name'],
    },
    description: {
      type: String,
      required: [true, 'Please enter description'],
    },
    image: {
      type: String,
      required: [true, 'Please enter image'],
    },
  },
  { timestamps: true }
);

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;
