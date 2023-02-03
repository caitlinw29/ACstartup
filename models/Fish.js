const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Fish extends Model {}

Fish.init(
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
    shadow: {
      type: DataTypes.STRING,
    },
    monthN: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    monthS: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAllDay: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    isAllYear: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    cjPrice: {
      type: DataTypes.INTEGER,
    },
    image: {
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
    modelName: "fish",
  }
);

module.exports = Fish;