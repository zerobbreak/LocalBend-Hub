const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
    name: String,
    description: String,
    location: String,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Business", businessSchema);
