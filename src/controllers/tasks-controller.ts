import { Request, Response } from 'express';
import prisma from '../config/prisma-config';


export const createTask = async (req: Request, res: Response):Promise<void> => {
    try {
        const { user } = req;
        console.log(user);
        if(!user || !user.id) {
            res.status(401).json({ error: 'Unauthorized' }); 
            return;
        }   
        const {
            title,
            description,
            startDate,
            dueDate,
            projectId,
            assignedToId,        
        } = req.body;

        if (!title || !projectId || !assignedToId) {
            res.status(400).json({ error: 'Missing required fields' });
            return;
        }

        const task = await prisma.task.create({
            data: {
                title,
                description,
                startDate: new Date(startDate),
                dueDate: new Date(dueDate),
                projectId,
                assignedToId,
                assignedById: user.id
            },
        });

        res.status(201).json({status:200, message: "Task created successfully", data: task });
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