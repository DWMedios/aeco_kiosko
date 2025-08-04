const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Reward extends Model {}
  Reward.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      establishment: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING(100),
        alowNull: true,
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      type: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      order: {
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
