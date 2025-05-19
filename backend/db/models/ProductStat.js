const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class ProductStat extends Model {
        static associate(models) {
            ProductStat.hasMany(models.Product, {
                foreignKey: 'product_id',
                as: 'product',
            })
        }
    }

    ProductStat.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            product_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            total_count: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            synchronized: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
        },
        {
            sequelize,
            modelName: 'ProductStat',
            tableName: 'product_stats',
            timestamps: true,
            underscored: true,
        }
    )
    return ProductStat
}
