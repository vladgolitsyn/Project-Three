const router = require("express").Router();
const registrationRoutes = require("./registration");

// User routes
router.use("/users/register", registrationRoutes);

module.exports = router;
