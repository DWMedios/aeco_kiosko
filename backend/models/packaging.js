"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Packaging extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Packaging.init(
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        field: "id",
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: "name",
      },
    },
    {
      sequelize,
      modelName: "Packaging",
    }
  );
  return Packaging;
};
