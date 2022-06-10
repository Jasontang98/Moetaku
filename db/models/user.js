'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      allowNull: false,
      type: DataTypes.STRING(30),
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING(30),
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Article, {foreignKey: 'user_id', onDelete: 'cascade',
    hooks: true})
    User.hasMany(models.Comment, {foreignKey: 'user_id', onDelete: 'cascade',
    hooks: true})
  };
  return User;
};
