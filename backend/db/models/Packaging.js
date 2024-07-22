const { DataTypes } = require("sequelize");
const { sequelize } = require("../index");

const Packaging = sequelize.define(
  "Packaging",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: "id",
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: "name",
    },
  },
  {
    tableName: "packagings",
    timestamps: false,
  }
);

module.exports = Packaging;
