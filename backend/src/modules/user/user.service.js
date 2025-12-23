
    import eventBus from "../../utils/eventBus.js";

    class UserService {
   



  constructor() {
    // this.TODO = todoModel;
    this.eventBus = eventBus;
  }


  async getAll() {
    return [];
  }

  async create(data) {
    const newuser = { id: Date.now(), ...data };
 
    // Emit event
    eventBus.emit("user.created", newuser);

    return newuser;
  }

}

export default new UserService();
