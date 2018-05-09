var mongoose = require('mongoose');

var ExpertSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, "Please enter a name"]
    },
    Role: {
        type: String,
        required: [true, "Please enter your current role"]
    },
    Bio: {
        type: String,
        required: [true, "Please tell us about yourself!"]
    },
    Expertise: {
        type: [String],
        required: [true, "What fields can you consult on?"]
    },
    LinkedIn: String,
    Twitter: String,
    Website: String
});

module.exports = mongoose.model("Expert", ExpertSchema);