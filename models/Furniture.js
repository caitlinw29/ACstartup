const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Furniture extends Model {}

Furniture.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    buyPriceNum: {
      type: DataTypes.INTEGER,
    },
    buyPriceString: {
      type: DataTypes.STRING,
    },
    pokiBuyPriceNum: {
      type: DataTypes.INTEGER,
    },
    pokiBuyPriceString: {
      type: DataTypes.STRING,
    },
    sellPriceNum: {
      type: DataTypes.INTEGER,
    },
    sellPriceString: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
    availability: {
      type: DataTypes.STRING,
    },
    customizable: {
      type: DataTypes.BOOLEAN,
    },
    custom_kits: {
      type: DataTypes.INTEGER,
    },
    function: {
      type: DataTypes.STRING,
    },
    variations: {
      type: DataTypes.BOOLEAN,
    },
    icon: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "furniture",
  }
);

module.exports = Furniture;
