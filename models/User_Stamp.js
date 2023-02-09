const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User_Stamp extends Model {}

User_Stamp.init(
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
    stampId: {
      type: DataTypes.INTEGER,
      references: {
        model: "stamp",
        key: "id",
      },
    },
    achievementName: {
      type: DataTypes.STRING,
    },
    isAchieved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user_stamp",
  }
);

module.exports = User_Stamp;
