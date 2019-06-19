"use strict";
module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define(
    "Chat",
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
  Chat.associate = function(models) {
    // associations can be defined here
    // Chat.hasMany(models.User, {
    //   foreignKey: {
    //     allowNull: false
    //   }
    // });
  };
  return Chat;
};

// Parent.belongsToMany( Child, {
//   as: [Relationship],
//   through: [Parent_Child] //this can be string or a model,
//   foreignKey: 'Parent_rowId'
// });

// Child.belongsToMany(Parent, {
//   as: [Relationship2],
//   through: [Parent_Child],
//   foreignKey: 'Child_rowId'
// });
