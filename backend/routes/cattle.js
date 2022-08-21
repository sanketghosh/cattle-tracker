const express = require("express");
const router = express.Router();
const {
  getAllCattle,
  getSingleCattle,
  createCattle,
  deleteCattle,
  updateCattle,
} = require("../controllers/cattleControllers");

//  GET all the cattle

router.get("/", getAllCattle);

//  GET a single type of cattle

router.get("/:id", getSingleCattle);

//  POST/CREATE a new type of cattle

router.post("/", createCattle);

//  DELETE a type of cattle

router.delete("/:id", deleteCattle);

//  UPDATE a type of cattle

router.patch("/:id", updateCattle);

module.exports = router;
