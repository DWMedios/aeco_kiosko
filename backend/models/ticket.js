"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: "id",
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: "name",
      },
      value: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: "value",
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "quantity",
      },
      localIconPath: {
        type: DataTypes.STRING(180),
        allowNull: true,
        field: "localIconPath",
      },
      iconPath: {
        type: DataTypes.STRING(180),
        allowNull: true,
        field: "iconPath",
      },
    },
    {
      sequelize,
      modelName: "Ticket",
    }
  );
  return Ticket;
};
