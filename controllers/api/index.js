const router = require("express").Router();
const userRoutes = require("./userRoutes");
const bugRoutes = require("./bugRoutes");

router.use("/users", userRoutes);
router.use("/bugs", bugRoutes);

module.exports = router;
