import { Router } from 'express';
import RecipeController from './recipe.controller.js';
import validate from '../../middlewares/default/validate.js';
import rateLimiter from '../../middlewares/default/rateLimiter.js';

const router = Router();
const recipeController = new RecipeController();

router.get('/', recipeController.getAll);
router.post("/", recipeController.create); // <-- new

export default router;
