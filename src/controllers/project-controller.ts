import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createProject = async (req: Request, res: Response):Promise<void> => {
  const { name, description} = req.body;
    const { user } = req;
    console.log(user)
    try {
        if (!name || !description) {
            res.status(400).json({ error: 'Name, description, and userId are required' });
            return;
        }
    const project = await prisma.project.create({
      data: {
        name,
        description,
        userId: user.id,
        members: {
          connect: { id: user.id } 
        }
      },
    });
      res.status(201).json({status: 201, message: "Project created successfully", data: project });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create project', details: err });
  }
};
export const updateProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const { projectId } = req.params;
    if (!projectId) {
      res.status(400).json({ status: 400, message: "Project ID is invalid" });
      return;
    }
    const { name, description } = req.body;
    const updatedproject = await prisma.project.update({
      where: { id: Number(projectId) },
      data: {
        name,
        description
      }
    });
    if (!updatedproject) {
      res.status(404).json({ status: 404, message: "Project not found" });
      return;
    }
    res.status(200).json({ status: 200, message: "Project updated successfully", data: updatedproject });
   
  } catch (error) {
    console.error("Error updating the project:", error);
    res.status(500).json({ error: 'Failed to update project', details: error });
  }
}

export const deleteProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const { projectId } = req.params;
    if (!projectId) {
      res.status(400).json({ status: 400, message: "Project ID is invalid" });
      return;
    }   
    const project = await prisma.project.delete({
      where: { id: Number(projectId) }
    });
    if (!project) {
      res.status(404).json({ status: 404, message: "project not found" });
      return;
    }
    res.status(200).json({ status: 200, message: "Project deleted successfully", data: project });
  } catch (error) {
    console.error("Error deleting the project:", error);
    res.status(500).json({ error: 'Failed to deleting project', details: error });
  }
} 

export const addProjectMember = async (req: Request, res: Response):Promise<void> => {
  try {
    const { projectId } = req.params;
    const { userId } = req.body;
    if( !projectId || !userId) {
      res.status(400).json({ error: 'Project ID and User ID are required' });
      return;
    }
    const project = await prisma.project.update({
      where: { id: Number(projectId) },
      data: {
        members: {
          connect: { id: userId }
        }
      }
    });
    if (!project) {
      res.status(404).json({ error: 'Project not found' });
      return;
    }
    res.status(200).json({status: 200, message: 'Member added', data: project });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add member', details: err });
  }
};

export const removeProjectMember = async (req: Request, res: Response):Promise<void> => {
  try {
    const { projectId } = req.params;
    const { userId } = req.body;
    if( !projectId || !userId) {
      res.status(400).json({ error: 'Project ID and User ID are required' });
      return;
    }
    const project = await prisma.project.update({
      where: { id: Number(projectId) },
      data: {
        members: {
          disconnect: { id: userId }
        }
      }
    });
    if (!project) {
      res.status(404).json({ error: 'Project not found' });
      return;
    }
    res.status(200).json({status: 200, message: 'Member removed', data: project });
  } catch (err) {
    res.status(500).json({ error: 'Failed to remove member', details: err });
  }
};

export const getProjectMembers = async (req: Request, res: Response):Promise<void> => {
  try {
    const { projectId } = req.params;
    if (!projectId) {
      res.status(400).json({ error: 'Project ID is required' });
      return;
    }
    const project = await prisma.project.findUnique({
      where: { id: Number(projectId) },
      include: { members: true }
    });

    if (!project) {
          res.status(404).json({ error: 'Project not found' });
          return;
    } 

    res.status(200).json({
      status: 200,
      message: "Project members fetched successfully",
      data: project.members
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch members', details: err });
  }
};

export const getProjectById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { projectId } = req.params;
    if (!projectId) {
      res.status(400).json({
        status: 400,
        message: "Project ID is invalid"
      });
      return;
    }
    const project = await prisma.project.findFirst({
      where: { id: Number(projectId) },
      include: {
        members: true,
        tasks: true,
        owner: true
      }
    });
    if (!project) {
      res.status(404).json({
        status: 404,
        message: "Project not found"
      })
      return;
    }
    res.status(200).json({
      status: 200,
      message: "Project fetched successfully",
      data: project
    });
  } catch (error) {
    console.error("Error fetching project by ID:", error);
    res.status(500).json({ error: 'Failed to fetch project', details: error });
  }
}

export const getProjectsOfUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { user } = req;
    if (!user || !user.id) {
      res.status(400).json({ error: 'User ID is required' });
      return;
    }
    const projects = await prisma.project.findMany({
      where: {
        members: {
          some: {
            id: user.id
          }
        }
      },
      include: {
        members: true,
      }
    });
    if (!projects || projects.length === 0) {
      res.status(404).json({
        status: 404,
        message: "No projects found for this user"
      })
      return;
    }
    res.status(200).json({
      status: 200,
      message: "Projects fetched successfully",
      data: projects
    });
  } catch (error) {
    console.error("Error fetching projects of user:", error);
    res.status(500).json({ error: 'Failed to fetch projects', details: error });
  }
}

export const getAllprojects = async (req: Request, res: Response): Promise<void> => {
  try {
    const projects = await prisma.project.findMany({
      include: {
        members: true,
        tasks: true,
        owner: true,
      }
    });
    if (!projects || projects.length === 0) {
      res.status(404).json({
        status: 404,
        message: "No projects found"
      });
      return;
    }
    res.status(200).json({
      status: 200,
      message: "All projects fetched successfully",
      data: projects
    });
  } catch (error) {
    console.error("Error fetching all projects:", error);
    res.status(500).json({ error: 'Failed to fetch all projects', details: error });
    
  }
}

export const getProjectTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const { projectId } = req.params;
    if (!projectId) {
      res.status(400).json({ error: 'Project ID is required' });
      return;
    }
    const tasks = await prisma.task.findMany({
      where: { projectId: Number(projectId) },
      include: {
        assignedTo: true,
        assignedBy: true,
      }
    });

    if (!tasks || tasks.length === 0) {
      res.status(404).json({ error: 'No tasks found for this project' });
      return;
    }

    res.status(200).json({
      status: 200,
      message: "Tasks fetched successfully",
      data: tasks
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks', details: err });
  }
}