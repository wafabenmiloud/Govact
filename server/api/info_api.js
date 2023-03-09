const dotenv = require("dotenv");
dotenv.config();

const { Info } = require("../model/info");

const addInfo = async (req, res) => {
  try {
   

   
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
const getInfo = async (req, res) => {
  try {
   

   
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = {
  addInfo,
  getInfo
 };
