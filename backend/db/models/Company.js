const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Company extends Model {}
  Company.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      mac_address: {
        type: DataTypes.STRING(17),
        allowNull: false,
        unique: true,
      },
      metadata: {
        type: DataTypes.JSONB,
        allowNull: true,
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
