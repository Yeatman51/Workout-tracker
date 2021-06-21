const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
// const PORT = 3000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout-tracker", {
    userNewUrlParser: true,
    useFindAndModify: false
});

require("./routing/display.js")(app);
require("./routing/api.js")(app);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});