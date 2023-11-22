const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    rating: Number,
    comment: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    entity: { type: mongoose.Schema.Types.ObjectId, ref: "Business" }, // or "Event"
});

module.exports = mongoose.model("Review", reviewSchema);
