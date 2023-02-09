const router = require("express").Router();
const { Stamp, User_Stamp } = require("../../models");

// route to create all stamps
router.post("/", async (req, res) => {
  try {
    const newStamp = await Stamp.create({
      category: req.body.category,
      tierAmt: req.body.tierAmt,
      reward: req.body.reward,
      stamp: req.body.stamp,
      achievement_id: req.body.achievement_id,
    });

    res.status(200).json(newStamp);
  } catch (err) {
    res.status(400).json(err);
  }
});

//creates a User_Stamp Table of donations
router.post("/:id", async (req, res) => {
  try {
    const newStamp = await User_Stamp.create({
      userId: req.session.user_id,
      stampId: req.body.id,
      achievementName: req.body.name,
      isAchieved: true,
    });

    res.status(200).json(newStamp);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
