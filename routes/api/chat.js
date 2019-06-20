const express = require("express");
const router = express.Router();
const uuidv5 = require("uuid/v5");
const Group = require("../../models/").ChatGroup;

router.post("/events", (req, res) => {
  const newGroup = {
    ...req.body
  };

  Group.findOne({
    where: {
      name: req.body.name
    }
  }).then(group => {
    if (group) {
      return res.status(400).json({ name: "Name already exists" });
    } else {
      Group.create(newGroup).then((err, res) => {
        res.json(newGroup);
        res.redirect(`/login`);
        if (err) {
          console.log(err);
        }
      });
    }
  });

  router.get("/dashboards/:id", (req, res) => {
    Group.findAll({
      include: [
        {
          model: User,
          through: {
            attributes: ["createdAt"],
            where: { userId: req.params.id }
          }
        }
      ]
    }).then(group => res.json(group));
  });
});
module.exports = router;
