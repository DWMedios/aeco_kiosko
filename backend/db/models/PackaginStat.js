const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class PackagingStat extends Model { }
    PackagingStat.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            packaging_type: {
                type: DataTypes.STRING,
                allowNull: true
            },
            total_count: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            synchronized: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
        },
        {
            sequelize,
            modelName: 'PackagingStat',
            tableName: 'packaging_stats',
            timestamps: true,
            underscored: true,
        }
    )
    return PackagingStat
}
