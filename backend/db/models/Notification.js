
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {}
  Notification.init(
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
      modelName: 'Notification',
      tableName: 'notification',
      timestamps: true,
      underscored: true,
    }
  )
  return Notification
}
