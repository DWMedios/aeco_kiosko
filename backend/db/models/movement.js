"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movement extends Model {
    static associate(models) {}
  }
  Movement.init(
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      machine_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      can_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bottle_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      folio: {
        type: DataTypes.STRING(15),
        allowNull: false,
        defaultValue: "0",
      },
    },
    {
      sequelize,
      modelName: "Movement",
    }
  );
  return Movement;
};
