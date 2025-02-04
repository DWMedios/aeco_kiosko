const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Reward extends Model {
    static associate(models) {
      Reward.belongsTo(models.RewardCategory, {
        foreignKey: 'reward_category_id',
        as: 'category',
      })
    }
  }
  Reward.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(30),
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
      reward_category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      metadata: {
        type: DataTypes.JSONB,
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
