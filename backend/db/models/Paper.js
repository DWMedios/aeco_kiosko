
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Paper extends Model {}
  Paper.init(
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      roll_quantity: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      current: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Paper',
      tableName: 'papers',
      timestamps: true,
      underscored: true,
    }
  )
  return Paper
}
