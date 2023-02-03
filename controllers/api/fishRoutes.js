const router = require("express").Router();
const { Fish, User_Fish } = require("../../models");

// route to create all bugs
router.post("/", async (req, res) => {
  try {
    //create a fish using the req.body
    const newFish = await Fish.create({
      name: req.body.name,
      sellPrice: req.body.sellPrice,
    });

    res.status(200).json(newFish);
  } catch (err) {
    res.status(400).json(err);
  }
});

//creates a User_Fish Table of donations
router.post("/:id", async (req, res) => {
  try {
    const newFish = await User_Fish.create({
      userId: req.session.user_id,
      fishId: req.body.id,
      isDonated: true,
    });

    res.status(200).json(newFish);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
