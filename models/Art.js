const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Art extends Model {}

Art.init(
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
    hasFake: {
      type: DataTypes.BOOLEAN,
    },
    fakeIcon: {
      type: DataTypes.STRING,
    },
    buyPriceNum: {
      type: DataTypes.INTEGER,
    },
    buyPriceString: {
      type: DataTypes.STRING,
    },
    authenticityNote: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "art",
  }
);

module.exports = Art;
