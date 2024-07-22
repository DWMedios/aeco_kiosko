const { DataTypes } = require("sequelize");
const { sequelize } = require("../index");

const Notification = sequelize.define(
  "Notification",
  {
    d: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      field: "id",
    },
    machineId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "machineId",
    },
    notificationTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "notificationTypeId",
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      field: "status",
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "user_id",
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "fecha",
    },
  },
  {
    tableName: "notifications",
    timestamps: false,
  }
);

// Definir las asociaciones si existen
Notification.associate = function (models) {
  // Aquí puedes definir relaciones, por ejemplo:
  // Notification.belongsTo(models.NotificationType, {
  //   foreignKey: 'notificationTypeId',
  //   as: 'notificationType'
  // });
  // Notification.belongsTo(models.Machine, {
  //   foreignKey: 'machineId',
  //   as: 'machine'
  // });
};

module.exports = Notification;
