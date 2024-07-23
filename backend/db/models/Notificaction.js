"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notificaction extends Model {
    static associate(models) {}
  }
  Notificaction.init(
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      type: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      metadata: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Notificaction",
      tableName: "notificactions",
      timestamps: true,
      underscored: true,
    }
  );
  return Notificaction;
};
