const mongoose = require("mongoose");

const InfoSchema = new mongoose.Schema({
	doc: { type: String, required: true },
	cin: { type: String, required: true },
	phone: { type: Number, required: true },
	author:{type:mongoose.Schema.Types.ObjectId, ref:'users'},

});

const Info = mongoose.model("info", InfoSchema);

module.exports = { Info };