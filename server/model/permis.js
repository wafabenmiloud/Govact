const mongoose = require("mongoose");

const permisSchema = new mongoose.Schema({
	cin: { type: String, required: true, unique:true },
	permis: { type: Number, required: true, unique:true },
	ready: {type:Boolean, default:false, required:false}
});

const Permis = mongoose.model("permis", permisSchema);

module.exports = { Permis };