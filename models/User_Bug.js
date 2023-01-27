const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User_Bug extends Model {}

User_Bug.init(
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
    bugId: {
      type: DataTypes.INTEGER,
      references: {
        model: "bug",
        key: "id",
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
    modelName: "user_bug",
  }
);

module.exports = User_Bug;
