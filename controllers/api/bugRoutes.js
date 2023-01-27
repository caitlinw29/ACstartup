const router = require("express").Router();
const { Bug } = require("../../models");

// route to create all bugs
router.post("/", async (req, res) => {
  try {
    //create a bug using the req.body
    const newBug = await Bug.create({
      name: req.body.name,
      sellPrice: req.body.sellPrice,
    });

    res.status(200).json(newBug);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
