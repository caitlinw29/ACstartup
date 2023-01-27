const router = require("express").Router();
const { Bug, User_Bug } = require("../../models");
const withAuth = require("../../utils/auth");

// route to create all bugs
router.post("/", async (req, res) => {
  try {
    //create a bug using the req.body
    const newBug = await Bug.create({
      name: req.body.name,
      sellPrice: req.body.sellPrice,
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
      isDonated: true,
    });

    res.status(200).json(newBug);
  } catch (err) {
    res.status(400).json(err);
  }
});

//donate a bug when signed in - across all users
// router.put("/:id", withAuth, async (req, res) => {
//   try {
//     const bugData = await User_Bug.update(
//       {
//         isDonated: true,
//       },
//       {
//         where: {
//           bugId: req.params.id,
//         },
//       }
//     );

//     if (!bugData) {
//       res.status(404).json({ message: "No bug found" });
//       return;
//     }

//     res.status(200).json(bugData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
