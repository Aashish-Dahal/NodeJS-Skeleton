import { config } from "./config";
import app from "./config/express";

app.listen(config.port, () =>
  console.log(`server running in ${config.env} mode on port ${config.port}`)
);
