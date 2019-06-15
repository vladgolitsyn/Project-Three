const moment = require("moment");
const passport = require("passport");
const router = require("express").Router();

router.route("/").get((req, res) => {
  req.logout();
  req.session.destroy();
  req.flash("success_msg", "You are logout");
});
module.exports = router;
