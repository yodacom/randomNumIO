var stream = require("stream");

function RandomNum(options) {
	stream.Readable.call(this, options);
	this._start = 1;
	this._end = 1000;
	this._curr = 1; //"this._Math.floor((Math.random() * 1000) + 1)";
};

RandomNum.prototype = Object.create(stream.Readable.prototype);
RandomNum.prototype.constructor = RandomNum;

RandomNum.prototype._read = function (){
	var number = Math.floor((Math.random() * 1000) + 1);
	var buf = new Buffer(number.toString(), "utf-8");
	this.push(buf);
	this._curr++;
	if (this._curr === this._end) {
		this.push(null);
	}

};

module.exports = RandomNum;