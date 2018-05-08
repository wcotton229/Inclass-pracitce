module.exports = function(sequelize, DataTypes) {
  // Add code here to create a Post model
  var Post = sequelize.define("Post", {
    title: {
       type: DataTypes.STRING,
       allowNull: false,
       validation:{

       }
    }
    body: DataTypes.TEXT,
    category: DataTypes.STRING
  });
  return Post;
  // This model needs a title, a body, and a category
  // Don't forget to 'return' the post after defining
};
