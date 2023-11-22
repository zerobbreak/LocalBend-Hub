const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        // Add email validation if needed
        // validate: { validator: /* custom validation function */ }
    },
    password: {
        type: String,
        required: true,
        // Add password validation and security measures if needed
        // validate: { validator: /* custom validation function */ }
    },
    profilePicture: {
        type: String,
    },
    joinDate: {
        type: Date,
        default: Date.now,
    },
    verified: {
        type: Boolean,
        default: false,
    },

    // Reference the appropriate models for events and businesses
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
    businesses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Business" }],

    verificationToken: String,
});

module.exports = mongoose.model("User", userSchema);
