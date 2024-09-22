const { Model } = require('sequelize')

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
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
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
