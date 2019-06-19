module.exports = (sequelize, DataTypes) => {
  const GroupUser = sequelize.define("GroupUser", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id"
      }
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Group",
        key: "id"
      }
    }
  });
  return GroupUser;
};
