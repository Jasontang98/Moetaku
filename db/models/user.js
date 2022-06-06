'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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
    User.belongsTo(models.Article, {foreignKey: 'user_id'})
    User.belongsTo(models.Comment, {foreignKey: 'user_id'})
  };
  return User;
};
