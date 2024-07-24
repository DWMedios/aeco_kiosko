"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Capacity.belongsTo(models.Capacity, {
        foreignKey: "capacity_id",
        as: "capacity",
      });
    }
  }
  Product.init(
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      code: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      family: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(120),
        allowNull: false,
      },
      capacity_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products",
      timestamps: true,
      underscored: true,
    }
  );
  return Product;
};
