import express from "express";
import { jwtVerify } from "../middleware/user-middleware";
import { createTask, deleteTask, getAllProjectTasksOfUser, getAllTasksOfUser, getTaskById } from "../controllers/tasks-controller";

const router = express.Router();

router.post("/create-task", jwtVerify, createTask);
router.delete("/delete-task/:taskId", jwtVerify, deleteTask)
router.get("/get-task/:taskId", jwtVerify, getTaskById)
router.get("/tasksOfUser", jwtVerify, getAllTasksOfUser);
router.get("/project-tasks/:projectId", jwtVerify, getAllProjectTasksOfUser)
export default router;