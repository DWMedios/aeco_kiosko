
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Reward extends Model {}
  Reward.init(
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      status: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      order: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      enabled_icon: {
        type: DataTypes.STRING(180),
        allowNull: true,
      },
      disabled_icon: {
        type: DataTypes.STRING(180),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Reward',
      tableName: 'rewards',
      timestamps: true,
      underscored: true,
    }
  )
  return Reward
}
