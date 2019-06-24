const Group = require("../models/").GroupChat;
const User = require("../models/").User;

module.exports = {
  findById: function(req, res) {
    User.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Group
        }
      ]
    })
      .then(user => {
        console.log("[DEBUG] users", user.dataValues.GroupChats);
        res.json({ groups: user.dataValues.GroupChats });
      })
      .catch(err => {
        console.log("[DEBUG] get user groups", err);
        res.json(err);
      });
  }
};
