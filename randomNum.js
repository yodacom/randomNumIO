var stream = require("stream");

function RandomNum(options) {
	stream.Readable.call(this, options);
	this._start = "1";
	this._end = "1000";
	this._curr = "this._Math.floor((Math.random() * 1000) + 1)";
};

RandomNum.prototype = Object.create(stream.Readable.prototype);
RandomNum.prototype.consructor = RandomNum;

RandomNum.prototype._read = function (){
	var number = RandomNum();
	var buf = new Buffer(number);
	this.push(buf);
	this._curr++;
	if (number === this._end) {
		this.push(null);
	}

};

module.exports = RandomNum;