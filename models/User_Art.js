const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User_Art extends Model {}

User_Art.init(
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
    artId: {
      type: DataTypes.INTEGER,
      references: {
        model: "art",
        key: "id",
      },
    },
    artName: {
      type: DataTypes.STRING,
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
    modelName: "user_art",
  }
);

module.exports = User_Art;
