import express from "express";
import cors from "cors";
import routes from "../../app/routes";
import { errorHandler } from "../../app/middleware/error";

const app = express();

// parse body params and attache them to req.body
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: false }));

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mount api v1 routes
app.use("/api/v1", routes);

//handle errors
app.use(errorHandler);

export default app;
