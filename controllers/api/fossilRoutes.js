const router = require("express").Router();
const { Fossil, User_Fossil } = require("../../models");

// route to create all fossils
router.post("/", async (req, res) => {
  try {
    const newFossil = await Fossil.create({
      name: req.body.capitalName,
      sellPriceNum: req.body.sellPriceNum,
      sellPriceString: req.body.sellPriceString,
      icon: req.body.icon,
    });

    res.status(200).json(newFossil);
  } catch (err) {
    res.status(400).json(err);
  }
});

//creates a User_Fossil Table of donations
router.post("/:id", async (req, res) => {
  try {
    const newFossil = await User_Fossil.create({
      userId: req.session.user_id,
      fossilId: req.body.id,
      fossilName: req.body.name,
      isDonated: true,
    });

    res.status(200).json(newFossil);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
