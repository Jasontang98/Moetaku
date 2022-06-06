'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    body: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    article_id: {
      type: DataTypes.INTEGER,
      references: {model: 'Articles'}

    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {model: 'Users'}
    },
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.hasMany(models.Article, {foreignKey: 'article_id'})
    Comment.hasMany(models.User, {foreignKey: 'user_id'})

  };
  return Comment;
};
