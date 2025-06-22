import { Request, Response } from 'express';
import prisma from '../config/prisma-config';


export const createTask = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log("Webhook Received:", JSON.stringify(req.body, null, 2));
        
        const event = req.body.event;
        const task = req.body.task;

        // ✅ Accept taskUpdated instead of taskCreated
        if (event !== 'taskUpdated') {
            res.sendStatus(200);
            return;
        }

        const assignee = task?.assignees?.[0];
        if (!assignee?.email) {
            res.status(200).json({ message: 'No assignee' });
            return;
        }

        // ✅ Lookup user by email from ClickUp
        const assigneeUser = await prisma.user.findUnique({
            where: { email: assignee.email },
        });

        if (!assigneeUser) {
            console.warn('Assignee not found in system:', assignee.email);
            res.status(404).json({ error: 'Assignee not found in system' });
            return;
        }

        // ✅ Check if task already exists (optional)
        const existing = await prisma.task.findFirst({
            where: { title: task.name }
        });

        if (existing) {
            console.log("Task already exists:", task.name);
            res.status(200).json({ message: 'Task already exists' });
            return;
        }

        const createdTask = await prisma.task.create({
            data: {
                title: task.name,
                description: task.text_content || '',
                startDate: new Date(Number(task.date_created) || Date.now()),
                dueDate: task.due_date ? new Date(Number(task.due_date)) : new Date(),
                status: "PENDING",
                assignedToId: assigneeUser.id,
                assignedById: assigneeUser.id, // You can update this later
                projectId: 1,
            },
        });

        res.status(201).json({ status: 200, message: "Task created successfully", data: createdTask });
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ error: 'Failed to create task' });
    }
};


export const deleteTask = async (req: Request, res: Response):Promise<void> => {
  const taskId = parseInt(req.params.taskId);

  if (isNaN(taskId)) {
      res.status(400).json({ error: 'Invalid task ID' });
      return;
  }

  try {
    const task = await prisma.task.findUnique({
      where: { id: taskId },
    });

    if (!task) {
        res.status(404).json({ error: 'Task not found' });
        return;
    }

    await prisma.task.delete({
      where: { id: taskId },
    });

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'Failed to delete task' });
  }
};

export const getTaskById = async (req: Request, res: Response): Promise<void> => { 
    try {
        const taskId = parseInt(req.params.taskId);
        if (isNaN(taskId)) {
            res.status(400).json({ error: 'Invalid task ID' });
            return;
        }
        const task = await prisma.task.findUnique({
            where: { id: taskId },
            include: {
                assignedTo: true,
                project: true,
                assignedBy: true,
            },
        });
        if (!task) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }
        res.status(200).json({ status: 200, message: "Task fetched successfully", data: task });
    } catch (error) {
        console.error("Error in fetching task:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }

}

export const getAllTasksOfUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { user } = req;
        if (!user || !user.id) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const tasks = await prisma.task.findMany({
            where: {
                assignedToId: user.id,
            },
            include: {
                assignedTo: true,
                project: true,
                assignedBy: true,
            },
        }); 
        await prisma.task.updateMany({
            where: {
                dueDate: { lt: new Date() },
                status: "PENDING",
            },
            data: { status: "OVERDUE" },
        });
        if (!tasks || tasks.length === 0) {
            res.status(404).json({ error: 'No tasks found for this user' });
            return;
        }
        res.status(200).json({ status: 200, message: "Tasks fetched successfully", data: tasks });
    } catch (error) {
        console.error("Error in fetching tasks:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getAllProjectTasksOfUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { user } = req;
        const { projectId } = req.params;
        if (!projectId) {
            res.status(400).json({ error: 'Project ID is required' });
            return;
        }
        if (!user || !user.id) {    
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const tasks = await prisma.task.findMany({
            where: {
                projectId: parseInt(projectId),
                assignedToId: user.id,
            },
            include: {
                assignedTo: true,
                project: true,
                assignedBy: true,
            },
        });
        await prisma.task.updateMany({
            where: {
            dueDate: { lt: new Date() },
            status: "PENDING",
        },
        data: { status: "OVERDUE" },
        });

        if (!tasks || tasks.length === 0) {
            res.status(404).json({ error: 'No tasks found for this user in the project' });
            return;
        }
        res.status(200).json({ status: 200, message: "Project tasks of user fetched successfully", data: tasks });

    } catch (error) {
        console.error("Error in fetching project tasks of user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const markTaskCompleted = async (req: Request, response: Response): Promise<void> => {
    try {
        const taskId = parseInt(req.params.taskId);
        if( isNaN(taskId)) {
            response.status(400).json({ error: 'Invalid task ID' });
            return;
        }
        const task = await prisma.task.update({
            where: { id: taskId },
            data: {
                status: 'COMPLETED',
                completedOn: new Date(),
            }
        });
        if (!task) {
            response.status(404).json({
                status: 404,
                message: "Task not found",
                
            });
            return;
        }
        response.status(200).json({
            status: 200,    
            message: "Task marked as completed successfully",
            data: task
        });
    } catch (error) {
        console.error("Error in marking task as completed:", error);
        response.status(500).json({ error: "Internal Server Error" });
    }
}

export const updateTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const taskId = parseInt(req.params.taskId);
        if (isNaN(taskId)) {
            res.status(400).json({ error: 'Invalid task ID' });
            return;
        }
        const { title, description, startDate, dueDate, assignedToId } = req.body;

        const updatedTask = await prisma.task.update({
            where: { id: taskId },
            data: {
                title,
                description,
                startDate: new Date(startDate),
                dueDate: new Date(dueDate),
                assignedToId,
            },
        });

        res.status(200).json({ status: 200, message: "Task updated successfully", data: updatedTask });
    } catch (error) {
        console.error("Error in updating task:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}   