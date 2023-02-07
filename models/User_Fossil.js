const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User_Fossil extends Model {}

User_Fossil.init(
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
    fossilId: {
      type: DataTypes.INTEGER,
      references: {
        model: "fossil",
        key: "id",
      },
    },
    fossilName: {
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
    modelName: "user_fossil",
  }
);

module.exports = User_Fossil;
