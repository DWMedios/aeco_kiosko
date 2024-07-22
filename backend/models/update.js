"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Update extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Update.init(
    {
      id: {
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
      sequelize,
      modelName: "Update",
    }
  );
  return Update;
};
