const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Publicity extends Model { }
  Publicity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
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
      end_date: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      mime_type: {
        type: DataTypes.STRING(50),
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
