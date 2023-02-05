const router = require("express").Router();
const { Bug, User_Bug } = require("../../models");

// route to create all bugs
router.post("/", async (req, res) => {
  try {
    //create a bug using the req.body
    const newBug = await Bug.create({
      id: req.body.id,
      name: req.body.capitalName,
      sellPrice: req.body.sellPrice,
      monthN: req.body.monthN,
      monthArrayN: req.body.monthArrayN,
      monthS: req.body.monthS,
      monthArrayS: req.body.monthArrayS,
      time: req.body.time,
      location: req.body.location,
      flickPrice: req.body.flickPrice,
      icon: req.body.icon,
      total_catch: req.body.total_catch,
    });

    res.status(200).json(newBug);
  } catch (err) {
    res.status(400).json(err);
  }
});

//creates a User_Bug Table of donations
router.post("/:id", async (req, res) => {
  try {
    //create a bug using the req.body
    const newBug = await User_Bug.create({
      userId: req.session.user_id,
      bugId: req.body.id,
      bugName: req.body.name,
      isDonated: true,
    });

    res.status(200).json(newBug);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
