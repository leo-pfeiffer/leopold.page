// External modules

const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || "8080";

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// set the static path
app.use(express.static(path.join(__dirname, 'static')));

// Server activation
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});