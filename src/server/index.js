const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.once('open', function() {
    console.log('Success: connected to MongoDb!');
});
mongoose.connection.on('error', function(err) {
    process.exit(1);
});

app.use(express.static(__dirname + './../../'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post("/", function(req,res) {
    console.log("It works!");
})

app.listen(PORT);