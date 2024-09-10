const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Movement extends Model {}
  Movement.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      can_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bottle_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      folio: {
        type: DataTypes.STRING(15),
        allowNull: false,
        defaultValue: '0',
      },
      synchronized: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Movement',
      tableName: 'movements',
      timestamps: true,
      underscored: true,
    }
  )
  return Movement
}
