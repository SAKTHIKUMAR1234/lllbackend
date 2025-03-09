import dotenv from "dotenv";
import express, { type NextFunction,type Request, type Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

dotenv.config();
const app = express();

app.use(
  rateLimit({
    windowMs: 60 * 1000 * 2,
    max: 50,
    message: "Too Many Requests, Please Try Again Later",
    headers: true,
  })
);
app.use(helmet());
app.use(morgan("combined"));

app.listen(process.env.PORT, () => {
  console.log(`Server Started At Port---> ${process.env.PORT}`);
});
