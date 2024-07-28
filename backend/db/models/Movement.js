
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Movement extends Model {}
  Movement.init(
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      can_number: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      bottle_number: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      folio: {
        type: DataTypes.STRING(15),
        allowNull: false,
        defaultValue: '0',
      },
      synchronized: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 1,
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
