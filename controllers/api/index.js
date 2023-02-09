const router = require("express").Router();
const userRoutes = require("./userRoutes");
const bugRoutes = require("./bugRoutes");
const fishRoutes = require("./fishRoutes");
const seaRoutes = require("./seaRoutes");
const fossilRoutes = require("./fossilRoutes");
const artRoutes = require("./artRoutes");
const achievementRoutes = require("./achievementRoutes");
const stampRoutes = require("./stampRoutes");


router.use("/users", userRoutes);
router.use("/bugs", bugRoutes);
router.use("/fish", fishRoutes);
router.use("/sea", seaRoutes);
router.use("/fossil", fossilRoutes);
router.use("/art", artRoutes);
router.use("/achievement", achievementRoutes);
router.use("/stamp", stampRoutes);


module.exports = router;
