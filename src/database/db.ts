import { Sequelize } from "sequelize";

export const db = new Sequelize(
  process.env.DATA_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASS,
  {
    dialect: "postgres",
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
  }
);
