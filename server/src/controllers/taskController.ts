import { Request, Response } from 'express';
import prisma from '../utils/prisma';

interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: string;
  };
}

// Create a new task
export const createTask = async (req: AuthRequest, res: Response) => {
  try {
    const { title, description, startDate, dueDate, priority, projectId, assignedToId } = req.body;
    const createdById = req.user?.id;

    if (!createdById) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        startDate: new Date(startDate),
        dueDate: new Date(dueDate),
        priority,
        projectId,
        assignedToId,
        createdById,
        status: 'TODO'
      },
      include: {
        project: true,
        assignedTo: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });

    res.status(201).json(task);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ message: 'Error creating task' });
  }
};

// Get all tasks (with filters)
export const getTasks = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    const userRole = req.user?.role;
    const { projectId, status, priority } = req.query;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const where: any = {};
    
    // Add filters if provided
    if (projectId) where.projectId = projectId;
    if (status) where.status = status;
    if (priority) where.priority = priority;

    // If not admin, only show assigned or created tasks
    if (userRole !== 'ADMIN') {
      where.OR = [
        { assignedToId: userId },
        { createdById: userId }
      ];
    }

    const tasks = await prisma.task.findMany({
      where,
      include: {
        project: {
          select: {
            id: true,
            name: true,
            status: true
          }
        },
        assignedTo: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Error fetching tasks' });
  }
};

// Get task by ID
export const getTaskById = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user?.id;
    const userRole = req.user?.role;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const where: any = { id };
    
    // If not admin, verify access rights
    if (userRole !== 'ADMIN') {
      where.OR = [
        { assignedToId: userId },
        { createdById: userId }
      ];
    }

    const task = await prisma.task.findFirst({
      where,
      include: {
        project: true,
        assignedTo: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json(task);
  } catch (error) {
    console.error('Error fetching task:', error);
    res.status(500).json({ message: 'Error fetching task' });
  }
};

// Update task
export const updateTask = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user?.id;
    const userRole = req.user?.role;
    const updates = req.body;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Check if task exists and user has rights
    const existingTask = await prisma.task.findFirst({
      where: {
        id,
        OR: [
          { assignedToId: userId },
          { createdById: userId }
        ]
      }
    });

    if (!existingTask && userRole !== 'ADMIN') {
      return res.status(403).json({ message: 'Not authorized to update this task' });
    }

    // Convert dates if provided
    if (updates.startDate) {
      updates.startDate = new Date(updates.startDate);
    }
    if (updates.dueDate) {
      updates.dueDate = new Date(updates.dueDate);
    }

    const task = await prisma.task.update({
      where: { id },
      data: updates,
      include: {
        project: true,
        assignedTo: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });

    res.json(task);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ message: 'Error updating task' });
  }
};

// Delete task
export const deleteTask = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user?.id;
    const userRole = req.user?.role;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Check if task exists and user has rights
    const existingTask = await prisma.task.findFirst({
      where: {
        id,
        OR: [
          { createdById: userId }
        ]
      }
    });

    if (!existingTask && userRole !== 'ADMIN') {
      return res.status(403).json({ message: 'Not authorized to delete this task' });
    }

    await prisma.task.delete({
      where: { id }
    });

    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ message: 'Error deleting task' });
  }
}; 