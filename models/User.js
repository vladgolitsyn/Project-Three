"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: { type: DataTypes.STRING, validate: { notEmpty: true } },
      email: { type: DataTypes.STRING, validate: { isEmail: true } },
      password: { type: DataTypes.STRING, validate: { notEmpty: true } },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATEONLY
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATEONLY
      }
    },
    {}
  );

  User.associate = models => {
    User.belongsToMany(models.GroupChat, {
      through: "UserGroup",
      foreignKey: "userId"
    });
  };
  return User;
};
