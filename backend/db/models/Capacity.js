const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Capacity extends Model {
    static associate(models) {
      Capacity.hasMany(models.Product, {
        foreignKey: 'capacity_id',
        as: 'products',
      })
    }
  }

  Capacity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      packaging: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      weight: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      factor: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Capacity',
      tableName: 'capacities',
      timestamps: true,
      underscored: true,
    }
  )
  return Capacity
}
