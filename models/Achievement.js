const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Achievement extends Model {}

Achievement.init(
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
    awardCriteria: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
    numTiers: {
      type: DataTypes.INTEGER,
    },
    sequential: {
      type: DataTypes.BOOLEAN,
    },
    track: {
      type: DataTypes.STRING,
    },
    trackSolo: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "achievement",
  }
);

module.exports = Achievement;
