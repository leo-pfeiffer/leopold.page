// External modules

const express = require("express");
const path = require("path");

//App variables
const app = express();
const port = process.env.PORT || "8080";

// Routes Definitions
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Server activation
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});