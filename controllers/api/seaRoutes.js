const router = require("express").Router();
const { Sea, User_Sea } = require("../../models");

// route to create all sea creatures
router.post("/", async (req, res) => {
  try {
    const newSea = await Sea.create({
      id: req.body.id,
      name: req.body.capitalName,
      sellPrice: req.body.sellPrice,
      shadow: req.body.shadow,
      speed: req.body.speed,
      monthN: req.body.monthN,
      monthS: req.body.monthS,
      isAllDay: req.body.isAllDay,
      isAllYear: req.body.isAllYear,
      time: req.body.time,
      image: req.body.image,
      icon: req.body.icon,
    });

    res.status(200).json(newSea);
  } catch (err) {
    res.status(400).json(err);
  }
});

//creates a User_Sea Table of donations
router.post("/:id", async (req, res) => {
  try {
    const newSea = await User_Sea.create({
      userId: req.session.user_id,
      seaId: req.body.id,
      seaName: req.body.name,
      isDonated: true,
    });

    res.status(200).json(newSea);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;