"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Paper extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Paper.init(
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        field: "id",
      },
      rollQuantity: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: "rollQuantity",
      },
      current: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: "current",
      },
    },
    {
      sequelize,
      modelName: "Paper",
    }
  );
  return Paper;
};
