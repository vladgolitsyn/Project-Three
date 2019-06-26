const router = require("express").Router();
const groupsController = require("../../controllers/groupsController");

// Matches with "/api/groups"
router
  .route("/")
  .get(groupsController.findAll)
  .post(groupsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(groupsController.findbyId)
  .put(groupsController.update)
  .delete(groupsController.delete);

module.exports = router;
