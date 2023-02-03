const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User_Fish extends Model {}

User_Fish.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    fishId: {
      type: DataTypes.INTEGER,
      references: {
        model: "fish",
        key: "id",
      },
    },
    fishName: {
      type: DataTypes.STRING,
      references: {
        model: "fish",
        key: "name",
      },
    },
    isDonated: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user_fish",
  }
);

module.exports = User_Fish;
