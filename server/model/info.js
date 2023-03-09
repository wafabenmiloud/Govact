const mongoose = require("mongoose");

const InfoSchema = new mongoose.Schema({
	fullname: { type: String, required: true },
	doc: { type: String, required: true },
	cin: { type: Number, required: true },
	phone: { type: Number, required: true },

});

const Info = mongoose.model("info", InfoSchema);

module.exports = { Info };