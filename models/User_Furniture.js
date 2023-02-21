const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User_Furniture extends Model {}

User_Furniture.init(
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
    furnitureId: {
      type: DataTypes.INTEGER,
      references: {
        model: "furniture",
        key: "id",
      },
    },
    furnitureVariationName: {
      type: DataTypes.STRING,
    },
    furnitureName: {
      type: DataTypes.STRING,
    },
    isCataloged: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user_furniture",
  }
);

module.exports = User_Furniture;
