const router = require("express").Router();
const userRoutes = require("./users");
const groupRoutes = require("./groups");

// Book routes
router.use("/users", userRoutes);
router.use("/groups", groupRoutes);

module.exports = router;
