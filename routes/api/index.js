const router = require("express").Router();
const registrationRoutes = require("./registration");
const loginRoutes = require("./login");
const logoutRoutes = require("./logout");

// User routes
router.use("/users/register", registrationRoutes);
router.use("/users/login", loginRoutes);
router.use("/users/logout", logoutRoutes);

module.exports = router;
