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
    shadow: {
      type: DataTypes.STRING,
    },
    speed: {
      type: DataTypes.STRING,
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
    modelName: "sea",
  }
);

module.exports = Sea;
