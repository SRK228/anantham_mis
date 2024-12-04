import { Router } from 'express';
import { createProject, getProjects, getProjectById } from '../controllers/projectController';
import { authenticateToken, authorizeRoles } from '../middleware/auth';

const router = Router();

router.use(authenticateToken);

router.post('/', authorizeRoles('ADMIN', 'MANAGER'), createProject);
router.get('/', getProjects);
router.get('/:id', getProjectById);

export default router; 