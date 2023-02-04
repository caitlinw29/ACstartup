const router = require("express").Router();
const userRoutes = require("./userRoutes");
const bugRoutes = require("./bugRoutes");
const fishRoutes = require("./fishRoutes");
const seaRoutes = require("./seaRoutes");

router.use("/users", userRoutes);
router.use("/bugs", bugRoutes);
router.use("/fish", fishRoutes);
router.use("/sea", seaRoutes);

module.exports = router;
