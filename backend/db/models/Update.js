const { DataTypes } = require("sequelize");
const { sequelize } = require("../index");

const Update = sequelize.define(
  "Update",
  {
    updateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      field: "id",
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "status",
    },
  },
  {
    tableName: "updates",
    timestamps: false,
  }
);

module.exports = Update;
