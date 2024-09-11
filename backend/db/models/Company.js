const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Company extends Model {}
  Company.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      metadata: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Company',
      tableName: 'companies',
      timestamps: true,
      underscored: true,
    }
  )
  return Company
}
