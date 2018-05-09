var mongoose = require('mongoose');

var ExpertSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"]
    },
    role: {
        type: String,
        required: [true, "Please enter your current role"]
    },
    bio: {
        type: String,
        required: [true, "Please tell us about yourself!"]
    },
    expertise: {
        type: [String],
        required: [true, "What fields can you consult on?"]
    },
    linkedin: String,
    twitter: String,
    website: String
});

module.exports = mongoose.model("Expert", ExpertSchema);