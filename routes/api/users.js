const router = require("express").Router();

const usersController = require("../../controllers/usersController");

// Matches with "/api/users/:id/groups"
router.route("/:id/groups").get(usersController.findById);

module.exports = router;
