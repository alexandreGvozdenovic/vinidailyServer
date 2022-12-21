const express = require("express");
const mongoose = require("mongoose");
const app = express();
const WineSchema = require("./models/Wines");
app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:admin@alexcluster.jcm9g6d.mongodb.net/vinidaily?retryWrites=true&w=majority"
);

app.get("/wines", async (req, res) => {
  const wines = await WineSchema.find({});
  console.log("Wines", wines);
  res.json({ data: wines });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
