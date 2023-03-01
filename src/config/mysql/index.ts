import { createPool, Pool } from "mysql2";
import { config } from "..";

export const pool: Pool = createPool({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.db,
}).promise();
