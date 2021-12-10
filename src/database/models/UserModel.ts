import { DataTypes, Sequelize } from "sequelize";
import { db } from "../db";

export const UserModel = db.define("users", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  nickname: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },

  pass: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
