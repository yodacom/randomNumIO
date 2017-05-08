var RandomNum = require("./randomNum.js");
var randomNum = new RandomNum();
randomNum.on("data", function(chunk){
	console.log(chunk.toString());
});