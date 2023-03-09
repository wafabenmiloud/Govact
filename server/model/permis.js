const mongoose = require("mongoose");

const permisSchema = new mongoose.Schema({
	cin: { type: Number, required: true, unique:true },
	permis: { type: Number, required: true, unique:true },
});

const Permis = mongoose.model("permis", permisSchema);

module.exports = { Permis };