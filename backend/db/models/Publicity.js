const { DataTypes } = require("sequelize");
const { sequelize } = require("../index");

const Publicity = sequelize.define(
  "Publicity",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: "id",
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "name",
    },
    path: {
      type: DataTypes.STRING(250),
      allowNull: false,
      field: "path",
    },
    localPath: {
      type: DataTypes.STRING(250),
      allowNull: false,
      field: "localPath",
    },
  },
  {
    tableName: "publicities",
    timestamps: false,
  }
);

module.exports = Publicity;
