const db = require("../models");
const bcrypt = require("bcryptjs");
module.exports = {
  create: function(req, res) {
    const userData = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    };

    db.User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(user => {
        if (!user) {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            userData.password = hash;
            db.User.create(userData)
              .then(user => {
                res.json({ status: user.email + " registered" });
              })
              .catch(err => {
                res.send("error: " + err);
              });
          });
        } else {
          res.json({ error: "User already exists" });
        }
      })
      .catch(err => {
        res.send("error: " + err);
      });
  }
};
