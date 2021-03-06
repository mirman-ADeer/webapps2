var express = require("express");
var port = 3000
var app = express();

app.get("/greet/:name", function(req, res) {
	var name = req.params.name;
	res.send("<h1>Hi, " + name + "!</h1>");
});

app.use("/", express.static("public"));

app.listen(port, function() {
	console.log("Listening on port " + port.toString());
});
