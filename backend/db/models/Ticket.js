const { DataTypes } = require("sequelize");
const { sequelize } = require("../index");

const Ticket = sequelize.define(
  "Ticket",
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
    tableName: "tickets",
    timestamps: false,
  }
);

module.exports = Ticket;
