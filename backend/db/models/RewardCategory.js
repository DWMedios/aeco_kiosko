const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class RewardCategory extends Model {
    static associate(models) {
      RewardCategory.belongsTo(models.Reward, {
        foreignKey: 'reward_id',
        as: 'reward',
      })
    }
  }
  RewardCategory.init(
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(120),
        allowNull: false,
      },
      reward_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'RewardCategory',
      tableName: 'reward_categories',
      timestamps: true,
      underscored: true,
    }
  )
  return RewardCategory
}
