const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Fossil extends Model {}

Fossil.init(
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
      unique: true,
    },
    sellPriceNum: {
      type: DataTypes.INTEGER,
    },
    sellPriceString: {
      type: DataTypes.STRING,
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
    modelName: "fossil",
  }
);

module.exports = Fossil;
