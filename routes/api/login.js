const router = require("express").Router();
const loginController = require("../../controllers/loginController");
const passport = require("passport");

router.route("/").post(loginController.login),
  passport.authenticate("local", {
    failureFlash: true
  }),
  (req, res) => {
    res.json(req.user);
  };

module.exports = router;
