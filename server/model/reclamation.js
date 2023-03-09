const mongoose = require("mongoose");

const reclamationSchema = new mongoose.Schema({
	fullname: { type: String, required: true },
	reclamation: { type: String, required: true},
});

const Reclamation = mongoose.model("reclamations", reclamationSchema);

module.exports = { Reclamation };