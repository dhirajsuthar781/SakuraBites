import eventBus from "../../utils/eventBus.js";

/**
 * Listen for user events
 */
eventBus.on("user.created", (data) => {
  console.log("📢  user.created event is Called !");
});

