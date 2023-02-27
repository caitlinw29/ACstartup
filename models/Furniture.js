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
    variationIcon1: {
      type: DataTypes.STRING,
    },
    variationIcon2: {
      type: DataTypes.STRING,
    },
    variationIcon3: {
      type: DataTypes.STRING,
    },
    variationIcon4: {
      type: DataTypes.STRING,
    },
    variationIcon5: {
      type: DataTypes.STRING,
    },
    variationIcon6: {
      type: DataTypes.STRING,
    },
    variationIcon7: {
      type: DataTypes.STRING,
    },
    variationIcon8: {
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
