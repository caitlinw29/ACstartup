const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Bug extends Model {}

Bug.init(
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
    flickPrice: {
      type: DataTypes.INTEGER,
    },
    monthN: {
      type: DataTypes.STRING,
    },
    monthArrayN: {
      type: DataTypes.STRING,
    },
    monthS: {
      type: DataTypes.STRING,
    },
    monthArrayS: {
      type: DataTypes.STRING,
    },
    time: {
      type: DataTypes.STRING,
    },
    location: {
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
    modelName: "bug",
  }
);

module.exports = Bug;
