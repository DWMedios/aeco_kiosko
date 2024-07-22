const { DataTypes } = require("sequelize");
const { sequelize } = require("../index");

const Movement = sequelize.define(
  "Movement",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      field: "id",
    },
    machineId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "machineId",
    },
    canNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "canNumber",
    },
    bottleNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "bottleNumber",
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "date",
    },
    folio: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: "0",
      field: "folio",
    },
  },
  {
    tableName: "movements",
    timestamps: false,
  }
);

// Definir las asociaciones si existen
Movement.associate = function (models) {
  // Aquí puedes definir relaciones, por ejemplo:
  // Movement.belongsTo(models.PaymentType, {
  //   foreignKey: 'paymentTypeId',
  //   as: 'paymentType'
  // });
};

module.exports = Movement;
