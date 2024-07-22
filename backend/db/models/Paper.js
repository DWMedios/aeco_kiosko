const { DataTypes } = require("sequelize");
const { sequelize } = require("../index");

const Paper = sequelize.define(
  "Paper",
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
    tableName: "papers",
    timestamps: false,
  }
);

module.exports = Paper;
