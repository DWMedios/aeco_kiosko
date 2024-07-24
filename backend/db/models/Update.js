"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Update extends Model {
    static associate(models) {}
  }
  Update.init(
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
        primaryKey: true,
      },
      status: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Update",
      tableName: "updates",
      timestamps: true,
      underscored: true,
    }
  );
  return Update;
};
