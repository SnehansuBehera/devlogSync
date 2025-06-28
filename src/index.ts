import express from "express";
import authRouter from "./routes/user-routes";
import projectRouter from "./routes/project-routes";
import tasksRouter from "./routes/tasks-routes"
import githubRouter from "./routes/github-routes";
import vsCodeRouter from "./routes/vscode-routes";
import summaryRouter from "./routes/summary-routes"

import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', authRouter);
app.use('/api', projectRouter);
app.use('/api', tasksRouter);
app.use('/api', githubRouter);
app.use('/api', vsCodeRouter);
app.use("/api", summaryRouter)

app.listen(PORT, () => {
    console.log("Server is running at PORT:", PORT);
})


