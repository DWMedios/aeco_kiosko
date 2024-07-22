"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        field: "id",
      },
      code: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: "code",
      },
      family: {
        type: DataTypes.STRING(40),
        allowNull: true,
        field: "family",
      },
      name: {
        type: DataTypes.STRING(120),
        allowNull: false,
        field: "name",
      },
      capacityId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        field: "capacityId",
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
