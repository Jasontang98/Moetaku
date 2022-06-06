'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    body: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {model: 'Users'}
    }
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
    Article.hasMany(models.User, {foreignKey: 'user_id'})
    Article.belongsTo(models.Comment, {foreignKey: 'article_id'})
  };
  return Article;
};
