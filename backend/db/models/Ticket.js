
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {}
  Ticket.init(
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      value: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      icon: {
        type: DataTypes.STRING(180),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Ticket',
      tableName: 'tickets',
      timestamps: true,
      underscored: true,
    }
  )
  return Ticket
}
