import express from 'express';
import { addProjectMember, createProject, removeProjectMember, getProjectMembers, updateProject, getProjectsOfUser, getProjectById, deleteProject, getProjectTasks } from '../controllers/project-controller';
import { jwtVerify } from '../middleware/user-middleware';


const router = express.Router();

router.post('/create-project', jwtVerify, createProject);
router.put('/add-member/:projectId', jwtVerify, addProjectMember);
router.put('/remove-member/:projectId', jwtVerify, removeProjectMember);
router.get('/get-members/:projectId', jwtVerify, getProjectMembers);
router.put('/update/:projectId', jwtVerify, updateProject);
router.put('/delete/:projectId', jwtVerify, deleteProject);
router.get('/project/:projectId', jwtVerify, getProjectById);
router.get('/user-projects', jwtVerify, getProjectsOfUser);
router.get('/tasks/:projectId', jwtVerify, getProjectTasks);

export default router;