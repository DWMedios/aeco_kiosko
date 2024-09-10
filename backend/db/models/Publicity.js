const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Publicity extends Model {}
  Publicity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      path: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      local_path: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Publicity',
      tableName: 'publicities',
      timestamps: true,
      underscored: true,
    }
  )
  return Publicity
}
