const { DataTypes } = require("sequelize");
const { sequelize } = require("../index");

const Configuration = sequelize.define(
  "Configuration",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "id",
    },
    paramId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "paramId",
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "value",
    },
  },
  {
    tableName: "configuration",
    timestamps: false,
  }
);

module.exports = Configuration;
