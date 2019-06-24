module.exports = (sequelize, DataTypes) => {
  const UserGroup = sequelize.define("UserGroup", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id"
      }
    },
    groupchatId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "GroupChat",
        key: "id"
      }
    }
  });
  return UserGroup;
};
