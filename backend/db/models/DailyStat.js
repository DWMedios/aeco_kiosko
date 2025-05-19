const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class DailyStat extends Model { }
    DailyStat.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            total_tickets: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            total_bottles: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            total_cans: {
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
            modelName: 'DailyStat',
            tableName: 'daily_stats',
            timestamps: true,
            underscored: true,
        }
    )
    return DailyStat
}
