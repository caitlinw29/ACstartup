const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Stamp extends Model {}

Stamp.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category: {
      type: DataTypes.STRING,
    },
    tierAmt: {
      type: DataTypes.INTEGER,
    },
    reward: {
      type: DataTypes.INTEGER,
    },
    stamp: {
      type: DataTypes.STRING,
    },
    achievement_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'achievement',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "stamp",
  }
);

module.exports = Stamp;
