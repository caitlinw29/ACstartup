const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Sea extends Model {}

Sea.init(
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
    sellPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    monthN: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    monthArrayN: {
      type: DataTypes.STRING,
    },
    monthS: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    monthArrayS: {
      type: DataTypes.STRING,
    },
    time: {
      type: DataTypes.STRING,
    },
    shadow: {
      type: DataTypes.STRING,
    },
    speed: {
      type: DataTypes.STRING,
    },
    icon: {
      type: DataTypes.STRING,
    },
    total_catch: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "sea",
  }
);

module.exports = Sea;
