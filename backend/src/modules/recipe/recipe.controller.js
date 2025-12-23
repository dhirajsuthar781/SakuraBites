import RecipeService from "./recipe.service.js";
 import { statusCode } from '../../utils/constants/statusCode.js';
import './recipe.event.js'


export default class RecipeController {
  constructor() {
    this.recipeService =  RecipeService;
  }

  getAll = async (req, res, next) => {
    try {
            // res.fail('Todos not found');
       res.success("Get All Todos",{ from: "recipe Module" }, statusCode.OK);
      
    } catch (err) {
      next(err);
    }
  };

   create = async (req, res, next) => {
    try {
      const recipe = await this.recipeService.create(req.body); 
      res.success("recipe Created", recipe, statusCode.CREATED);
    } catch (err) {
      next(err);
    }
  };


}
