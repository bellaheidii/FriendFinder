var path = require("path");

module.exports = function (app) {
    console.log("htmlRoutes loaded");
    app.get("/survey", function (req, res) {
        console.log(path.join(__dirname + "/../public/survey.html"));
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    app.get("/", function (req, res) {
        console.log(path.join(__dirname + "/../public/survey.html"));
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
}