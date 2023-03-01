import dotenv from "dotenv";
import path from "path";

// import .env variables
dotenv.config({
  path: path.join(__dirname, "../../.env"),
});

export const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  db: process.env.MYSQL_DB,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
};
