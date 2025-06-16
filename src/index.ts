import express from "express";
import authRouter from "./routes/user-routes.ts";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use('/api', authRouter);

app.listen(PORT, () => {
    console.log("Server is running at PORT:", PORT);
})


