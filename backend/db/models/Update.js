const { Model } = require('sequelize')

const { UPDATE_TYPES } = require('../../enums/update')

module.exports = (sequelize, DataTypes) => {
  class Update extends Model {}
  Update.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      type: {
        type: DataTypes.ENUM(Object.values(UPDATE_TYPES)),
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      message: {
        type: DataTypes.STRING(550),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Update',
      tableName: 'updates',
      timestamps: true,
      underscored: true,
    }
  )
  return Update
}
