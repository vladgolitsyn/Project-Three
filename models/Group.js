"use strict";
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define(
    "Group",
    {
      name: { type: DataTypes.STRING, validate: { notEmpty: true } },
      eventName: { type: DataTypes.STRING, validate: { notEmpty: true } },

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
  Group.associate = models => {
    Group.belongsToMany(models.User, {
      through: "GroupUsers",
      as: "user",
      foreignKey: "groupId"
    });
  };
  return Group;
};
