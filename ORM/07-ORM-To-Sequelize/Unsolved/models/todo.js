module.exports = function(sequelize, DataTypes) {
    var ToDo = sequelize.define("todo", {
      text: DataTypes.STRING,
      compelete: DataTypes.BOOLEAN
    });
    return ToDo;
  };
  