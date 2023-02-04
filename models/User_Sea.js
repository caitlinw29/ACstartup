const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User_Sea extends Model {}

User_Sea.init(
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
    seaId: {
      type: DataTypes.INTEGER,
      references: {
        model: "sea",
        key: "id",
      },
    },
    seaName: {
      type: DataTypes.STRING,
      references: {
        model: "sea",
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
    modelName: "user_sea",
  }
);

module.exports = User_Sea;
