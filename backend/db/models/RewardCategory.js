const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class RewardCategory extends Model {
    static associate(models) {
      RewardCategory.hasMany(models.Reward, {
        foreignKey: 'reward_category_id',
        as: 'rewards',
      })
    }
  }
  RewardCategory.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(120),
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      order: {
        type: DataTypes.INTEGER,
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
