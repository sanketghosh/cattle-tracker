const express = require("express");
const router = express.Router();
const Cattle = require("../models/cattleModel");
//GET all the cattle
router.get("/", (req, res) => {
  res.json({ message: "GET all the workouts" });
});

//GET a single type of cattle
router.get("/:id", (req, res) => {
  res.json({ message: "GET a single type of cattle" });
});

//POST a new type of cattle
router.post("/", async (req, res) => {
  const { title, totalWeight, carsLoaded } = req.body;
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
  res.json({ message: "POST a new type of cattle" });
});

//DELETE a type of cattle
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a type of cattle" });
});

//UPDATE a type of cattle
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a type of cattle" });
});

module.exports = router;
