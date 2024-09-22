const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Page extends Model {}
  Page.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      metadata: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Page',
      tableName: 'pages',
      timestamps: true,
      underscored: true,
    }
  )
  return Page
}
