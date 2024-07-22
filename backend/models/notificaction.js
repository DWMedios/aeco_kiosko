"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notificaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Notificaction.init(
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
      sequelize,
      modelName: "Notificaction",
    }
  );
  return Notificaction;
};
