const Group = require("../models/").GroupChat;
const User = require("../models/").User;

module.exports = {
  findAll: function(req, res) {
    Group.findAll({}).then(groups => res.json(groups));
  },

  create: function(req, res) {
    const { eventName, eventDate } = req.body;
    let groupName = eventName + eventDate;
    // groupName = groupName.replace(/ /g, "");
    console.log("[DEBUG] trying to create group", groupName);
    Group.findOne({
      where: {
        name: groupName
        // id: req.params.id
      }
    }).then(group => {
      console.log("[DEBUG] group exists?", group);

      if (group) {
        console.log("[DEBUG] group does exists", group);
        res.status(409).json({ error: { status: 409, msg: "Group exists" } });
      }
      console.log("[DEBUG] group does not exist", group);
      Group.create({
        name: groupName
      })
        .then(group => {
          console.log("[DEBUG] group created", group);
          res.json(group);
        })
        .catch(err => {
          console.log("[DEBUG] unable to create group", group);
          res
            .status(404)
            .json({ error: { status: 404, msg: "Unable to create a group" } });
        });
    });
  },

  findbyId: function(req, res) {
    Group.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(group => res.json(group))
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    Group.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(group => {
        return group.addUsers(req.body.userId);
      })
      .then(user => res.json(user)); // sent group or user
  },

  delete: function(req, res) {
    const Sequelize = require("sequelize");
    const Op = Sequelize.Op;
    Group.destroy({
      where: {
        id: req.params.id
        // [Op.and]: { userId: Group.userId }
      }
    }).then(group => {
      console.log(res.json(group));
    });
  }
};

// FRONTEND LOGIC
// ==============
//   create a group
//     if 200 or 409 => add user to group
//     else => display error
