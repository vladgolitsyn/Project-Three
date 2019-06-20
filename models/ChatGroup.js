"use strict";
module.exports = (sequelize, DataTypes) => {
  const ChatGroup = sequelize.define(
    "ChatGroup",
    {
      name: { type: DataTypes.STRING, validate: { notEmpty: true } },
      eventName: { type: DataTypes.STRING, validate: { isEmail: true } },
      url: { type: DataTypes.STRING, validate: { notEmpty: true } },

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

  ChatGroup.associate = models => {
    ChatGroup.belongsToMany(models.User, {
      through: "UserGroup",
      as: "users",
      foreignKey: "groupId"
    });
  };
  return ChatGroup;
};
