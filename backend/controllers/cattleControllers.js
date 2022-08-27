const Cattle = require("../models/cattleModel");
const mongoose = require("mongoose");

// GET all the cattle
const getAllCattle = async (req, res) => {
  const allCattle = await Cattle.find({}).sort({ createdAt: -1 });

  res.status(200).json(allCattle);
};

// GET a single type of cattle

const getSingleCattle = async (req, res) => {
  const { id } = req.params;
  //checking if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such cattle found" });
  }

  const cattle = await Cattle.findById(id);
  if (!cattle) {
    return res.status(404).json({ error: "No such cattle" });
  }
  res.status(200).json(cattle);
};

// CREATE/POST a new cattle

const createCattle = async (req, res) => {
  const { title, totalWeight, carsLoaded } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!totalWeight) {
    emptyFields.push("total weight");
  }
  if (!carsLoaded) {
    emptyFields.push("cars loaded");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  //add this document to the database
  try {
    const cattle = await Cattle.create({
      title,
      totalWeight,
      carsLoaded,
    });
    res.status(200).json(cattle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a cattle

const deleteCattle = async (req, res) => {
  //fetching the id
  const { id } = req.params;
  //checking if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such cattle found" });
  }
  const deleteSingleCattle = await Cattle.findOneAndDelete({ _id: id });

  if (!deleteSingleCattle) {
    return res.status(404).json({ error: "No such cattle" });
  }
  res.status(200).json(deleteSingleCattle);
};

// UPDATE a cattle

const updateCattle = async (req, res) => {
  //fetching the id
  const { id } = req.params;
  //checking if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such cattle found" });
  }
  const updateSingleCattle = await Cattle.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!updateSingleCattle) {
    return res.status(404).json({ error: "No such cattle" });
  }

  res.status(200).json(updateSingleCattle);
};

module.exports = {
  getAllCattle,
  getSingleCattle,
  createCattle,
  deleteCattle,
  updateCattle,
};
