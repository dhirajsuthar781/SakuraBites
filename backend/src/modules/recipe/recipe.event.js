import eventBus from "../../utils/eventBus.js";

/**
 * Listen for recipe events
 */
eventBus.on("recipe.created", (data) => {
  console.log("📢  recipe.created event is Called !");
});

