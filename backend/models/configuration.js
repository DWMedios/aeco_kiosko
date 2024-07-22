"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Configuration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Configuration.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "id",
      },
      paramId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "paramId",
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "value",
      },
    },
    {
      sequelize,
      modelName: "Configuration",
    }
  );
  return Configuration;
};
