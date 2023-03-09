const dotenv = require("dotenv");
dotenv.config();

const { Permis } = require("../model/permis");

const check = async (req, res) => {
  try {
   
   
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};




module.exports = {
  check,
 };
