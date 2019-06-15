const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

const User = require("../models/").User;

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      User.findAll({
        where: {
          email: email
        }
      }).then(user => {
        if (!user) {
          return done(null, false, { message: "That email is not registered" });
        }
        bcrypt.compare(
          password,
          user[0].dataValues.password,
          (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              console.log("password incorrect");
              return done(null, false, { message: "Password incorrect" });
            }
          }
        );
      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(function(err, user) {
      done(err, user);
    });
  });
};
