const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cattleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    totalWeight: {
      type: Number,
      required: true,
    },
    carsLoaded: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cattle", cattleSchema);
