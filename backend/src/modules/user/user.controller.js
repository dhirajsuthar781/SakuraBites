import UserService from "./user.service.js";
 import { statusCode } from '../../utils/constants/statusCode.js';
import './user.event.js'


export default class UserController {
  constructor() {
    this.userService =  UserService;
  }

  getAll = async (req, res, next) => {
    try {
            // res.fail('Todos not found');
       res.success("Get All Todos",{ from: "user Module" }, statusCode.OK);
      
    } catch (err) {
      next(err);
    }
  };

   create = async (req, res, next) => {
    try {
      const user = await this.userService.create(req.body); 
      res.success("user Created", user, statusCode.CREATED);
    } catch (err) {
      next(err);
    }
  };


}
