"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Publicity extends Model {
    static associate(models) {}
  }
  Publicity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      path: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      local_path: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Publicity",
    }
  );
  return Publicity;
};
