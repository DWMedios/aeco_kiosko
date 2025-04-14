const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Paper extends Model {}
  Paper.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
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
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
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
