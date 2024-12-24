const mongoose = require('mongoose');

const ExperienceSchema = mongoose.Schema(
  {
    rooms: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Room',
      required: [true, 'Please enter room id'],
    },
    difficulty: {
      type: Number,
      required: [true, 'PLease enter experiece difficulty'],
    },
    player_limit: {
      type: Number,
      required: [true, 'Please enter room player limit'],
    },
    covers: {
      type: [String],
      required: [true, 'Please enter covers'],
    },
    mapImage: {
      type: String,
      required: [true, 'PLease enter map image'],
    },
  },
  { Timestamps: true }
);

const Experience = mongoose.model('Experience', ExperienceSchema);
module.exports = Experience;
