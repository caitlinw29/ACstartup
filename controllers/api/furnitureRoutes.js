const router = require("express").Router();
const { Furniture, User_Furniture } = require("../../models");

// route to create all furniture
router.post("/", async (req, res) => {
  try {
    const newFurniture = await Furniture.create({
      id: req.body.id,
      name: req.body.capitalName,
      buyPriceNum: req.body.buyPriceNum,
      buyPriceString: req.body.buyPriceString,
      pokiBuyPriceNum: req.body.pokiBuyPriceNum,
      pokiBuyPriceString: req.body.pokiBuyPriceString,
      sellPriceNum: req.body.sellPriceNum,
      sellPriceString: req.body.sellPriceString,
      category: req.body.category,
      availability: req.body.availabilityString,
      customizable: req.body.customizable,
      custom_kits: req.body.custom_kits,
      function: req.body.functionBool,
      variations: req.body.variations,
      icon: req.body.icon,
    });

    res.status(200).json(newFurniture);
  } catch (err) {
    res.status(400).json(err);
  }
});

//creates a User_Furniture Table of cataloged furniture
router.post("/:id", async (req, res) => {
  try {
    const newFurniture = await User_Furniture.create({
      userId: req.session.user_id,
      furnitureId: req.body.id,
      furnitureName: req.body.name,
      isCataloged: true,
    });

    res.status(200).json(newFurniture);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
