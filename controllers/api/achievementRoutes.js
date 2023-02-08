const router = require("express").Router();
const { Achievement, User_Achievement } = require("../../models");

// route to create all achievements
// router.post("/", async (req, res) => {
//   try {
//     const newAchievement = await Achievement.create({
//       name: req.body.capitalName,
//       sellPriceNum: req.body.sellPriceNum,
//       sellPriceString: req.body.sellPriceString,
//       icon: req.body.icon,
//       hasFake: req.body.hasFake,
//       fakeIcon: req.body.fakeIcon,
//       buyPriceNum: req.body.buyPriceNum,
//       buyPriceString: req.body.buyPriceString,
//       authenticityNote: req.body.authenticityNote,
//     });

//     res.status(200).json(newAchievement);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

//creates a User_Achievement Table of donations
router.post("/:id", async (req, res) => {
  try {
    const newAchievement = await User_Achievement.create({
      userId: req.session.user_id,
      achievementId: req.body.id,
      achievementName: req.body.name,
      isAchieved: true,
    });

    res.status(200).json(newAchievement);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
