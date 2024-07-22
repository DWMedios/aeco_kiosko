const { DataTypes } = require("sequelize");
const { sequelize } = require("../index");

const NotificationType = sequelize.define(
  "NotificationType",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: "id",
    },
    type: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: "type",
    },
  },
  {
    tableName: "notificationTypes",
    timestamps: false,
  }
);

module.exports = NotificationType;
