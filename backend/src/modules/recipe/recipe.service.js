
    import eventBus from "../../utils/eventBus.js";

    class RecipeService {
   



  constructor() {
    // this.TODO = todoModel;
    this.eventBus = eventBus;
  }


  async getAll() {
    return [];
  }

  async create(data) {
    const newrecipe = { id: Date.now(), ...data };
 
    // Emit event
    eventBus.emit("recipe.created", newrecipe);

    return newrecipe;
  }

}

export default new RecipeService();
