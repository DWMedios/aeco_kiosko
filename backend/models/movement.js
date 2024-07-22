"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movement.init(
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        field: "id",
      },
      machineId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "machineId",
      },
      canNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "canNumber",
      },
      bottleNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "bottleNumber",
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "date",
      },
      folio: {
        type: DataTypes.STRING(15),
        allowNull: false,
        defaultValue: "0",
        field: "folio",
      },
    },
    {
      sequelize,
      modelName: "Movement",
    }
  );
  return Movement;
};
