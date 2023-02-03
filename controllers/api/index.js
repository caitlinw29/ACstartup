const router = require("express").Router();
const userRoutes = require("./userRoutes");
const bugRoutes = require("./bugRoutes");
const fishRoutes = require("./fishRoutes");

router.use("/users", userRoutes);
router.use("/bugs", bugRoutes);
router.use("/fish", fishRoutes);

module.exports = router;
