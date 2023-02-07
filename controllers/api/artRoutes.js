const router = require("express").Router();
const { Art, User_Art } = require("../../models");

// route to create all art
router.post("/", async (req, res) => {
  try {
    const newArt = await Art.create({
      name: req.body.capitalName,
      sellPriceNum: req.body.sellPriceNum,
      sellPriceString: req.body.sellPriceString,
      icon: req.body.icon,
      hasFake: req.body.hasFake,
      fakeIcon: req.body.fakeIcon,
      buyPriceNum: req.body.buyPriceNum,
      buyPriceString: req.body.buyPriceString,
      authenticityNote: req.body.authenticityNote,
    });

    res.status(200).json(newArt);
  } catch (err) {
    res.status(400).json(err);
  }
});

//creates a User_Art Table of donations
router.post("/:id", async (req, res) => {
  try {
    const newArt = await User_Art.create({
      userId: req.session.user_id,
      artId: req.body.id,
      artName: req.body.name,
      isDonated: true,
    });

    res.status(200).json(newArt);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
