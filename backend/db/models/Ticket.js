const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {}
  Ticket.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      folio: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      method: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      summary: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      total_cans: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      total_bottles: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      printed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      synchronized: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
