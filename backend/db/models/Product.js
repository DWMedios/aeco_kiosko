const { DataTypes } = require("sequelize");
const { sequelize } = require("../index");

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: "id",
    },
    code: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "code",
    },
    family: {
      type: DataTypes.STRING(40),
      allowNull: true,
      field: "family",
    },
    name: {
      type: DataTypes.STRING(120),
      allowNull: false,
      field: "name",
    },
    capacityId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: "capacityId",
    },
  },
  {
    tableName: "products",
    timestamps: false,
  }
);

// Definir las asociaciones si existen
Product.associate = function (models) {
  // Aquí puedes definir relaciones, por ejemplo:
  // Product.belongsTo(models.Capacity, {
  //   foreignKey: 'capacityId',
  //   as: 'capacity'
  // });
};

module.exports = Product;
