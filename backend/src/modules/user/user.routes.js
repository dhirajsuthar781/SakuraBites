import { Router } from 'express';
import UserController from './user.controller.js';
import validate from '../../middlewares/default/validate.js';
import rateLimiter from '../../middlewares/default/rateLimiter.js';

const router = Router();
const userController = new UserController();

router.get('/', userController.getAll);
router.post("/", userController.create); // <-- new

export default router;
