const router = require("express").Router();
const { Achievement } = require("../../models");

// route to create all achievements
router.post("/", async (req, res) => {
  try {
    const newAchievement = await Achievement.create({
      id: req.body.id,
      name: req.body.name,
      awardCriteria: req.body.awardCriteria,
      category: req.body.category,
      numTiers: req.body.numTiers,
      sequential: req.body.sequential,
      track: req.body.track,
      trackSolo: req.body.trackSolo,
    });

    res.status(200).json(newAchievement);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
