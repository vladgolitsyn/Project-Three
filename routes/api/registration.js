const router = require("express").Router();
const registerController = require("../../controllers/registrationController");
// Matches with "/api/users/register"
router.route("/").post(registerController.create);
module.exports = router;
