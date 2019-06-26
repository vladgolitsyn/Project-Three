"use strict";
module.exports = (sequelize, DataTypes) => {
  const GroupChat = sequelize.define(
    "GroupChat",
    {
      name: { type: DataTypes.STRING },

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

  GroupChat.associate = models => {
    GroupChat.belongsToMany(models.User, {
      through: "UserGroup",
      foreignKey: "groupchatId"
    });
  };
  return GroupChat;
};
