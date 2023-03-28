const mongoose = require("mongoose");

const reclamationSchema = new mongoose.Schema({
	content:String,
	cover:String,
	summary:String,
	author:{type:mongoose.Schema.Types.ObjectId, ref:'users'},

});

const Reclamation = mongoose.model("reclamations", reclamationSchema);

module.exports = { Reclamation };