const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const db = require("../models");
const jwt = require("jsonwebtoken");

process.env.SECRET_KEY = "secret";
module.exports = {
  login: function(req, res) {
    db.User.findAll({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (!user) {
        console.log("no user found");
      }
      bcrypt.compare(
        req.body.password,
        user[0].dataValues.password,
        (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            // localStorage.setItem("name", "somat");
            console.log("user ", user[0].dataValues.name);
            // let token = jwt.sign(user[0].dataValues, process.env.SECRET_KEY, {
            //   expiresIn: 1440
            // });
            // res.send(token);
            res.json(user[0].dataValues);
          } else {
            res.status(404).json({ error: "password incorrect" });
            console.log("password incorrect");
          }
        }
      );
    });
  }
};
