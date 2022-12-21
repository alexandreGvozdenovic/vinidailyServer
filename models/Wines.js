const mongoose = require("mongoose");

const WineSchema = new mongoose.Schema({
  millesimed: Boolean,
  year: Number,
  grapeVarieties: String,
  logo: String,
  size: Number,
  region: String,
  agingPotential: Number,
  name: String,
  description: String,
  type: String,
  cuve: String,
  cru: String,
  appellation: String,
  appellationType: String,
  price: Number,
  note: String,
  winePaired: Array,
});

const Wines = mongoose.model("wines", WineSchema);

module.exports = Wines;
