"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Capacity extends Model {
    static associate(models) {
      Capacity.belongsTo(models.Packaging, {
        foreignKey: "packagingId",
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
        field: "id",
      },
      packagingId: {
        type: DataTypes.BIGINT,
        allowNull: true,
        field: "packagingId",
      },
      weight: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: "weight",
      },
      factor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "factor",
      },
      description: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "description",
      },
    },
    {
      sequelize,
      modelName: "Capacity",
    }
  );

  Capacity.init(
    {
      id: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Capacity",
    }
  );
  return Capacity;
};
