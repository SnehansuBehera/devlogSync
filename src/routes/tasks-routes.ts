import express from "express";
import { jwtVerify } from "../middleware/user-middleware";
import { createTask, deleteTask, getAllProjectTasksOfUser, getAllTasksOfUser, getTaskById, markTaskCompleted, updateTask } from "../controllers/tasks-controller";

const router = express.Router();

router.post("/create-task", jwtVerify, createTask);
router.delete("/delete-task/:taskId", jwtVerify, deleteTask)
router.get("/get-task/:taskId", jwtVerify, getTaskById)
router.get("/tasksOfUser", jwtVerify, getAllTasksOfUser);
router.get("/project-tasks/:projectId", jwtVerify, getAllProjectTasksOfUser)
router.put("mark-task/:taskId", jwtVerify, markTaskCompleted);
router.put("/update-task/:taskId", jwtVerify, updateTask)

export default router;