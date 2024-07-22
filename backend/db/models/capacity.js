"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Capacity extends Model {
    static associate(models) {
      Capacity.belongsTo(models.Packaging, {
        foreignKey: "packaging_id",
        as: "packaging",
      });
    }
  }

  Capacity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      packaging_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      weight: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      factor: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Capacity",
    }
  );
  return Capacity;
};
