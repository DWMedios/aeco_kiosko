const { DataTypes } = require("sequelize");
const { sequelize } = require("../index");

const Capacity = sequelize.define(
  "Capacity",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: "id",
    },
    environmentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: "environmentId",
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: "wight",
    },
    factor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "factor",
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "description",
    },
  },
  {
    tableName: "capacities",
    timestamps: false,
  }
);

Capacity.associate = function (models) {
  Capacity.belongsTo(models.Environment, {
    foreignKey: "environmentId",
    as: "environment",
  });
};

module.exports = Capacity;
