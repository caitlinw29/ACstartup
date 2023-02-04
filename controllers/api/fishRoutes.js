const router = require("express").Router();
const { Fish, User_Fish } = require("../../models");

// route to create all fish
router.post("/", async (req, res) => {
  try {
    //create a fish using the req.body
    const newFish = await Fish.create({
      id: req.body.id,
      name: req.body.capitalName,
      sellPrice: req.body.sellPrice,
      shadow: req.body.shadow,
      monthN: req.body.monthN,
      monthS: req.body.monthS,
      isAllDay: req.body.isAllDay,
      isAllYear: req.body.isAllYear,
      time: req.body.time,
      location: req.body.location,
      cjPrice: req.body.cjPrice,
      image: req.body.image,
      icon: req.body.icon,
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
      fishName: req.body.name,
      isDonated: true,
    });

    res.status(200).json(newFish);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
