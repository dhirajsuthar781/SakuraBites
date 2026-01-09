import cron from "node-cron";
import { User } from '../modules/user/user.model.js'
export const startUserDeletionCron = () => {
     // run every 10min
     cron.schedule("*/10 * * * *", async () => {
          try {

               // example task
               await cleanupExpiredSessions();

          } catch (err) {
               console.error("Cron failed:", err);
          }
     }, {
          timezone: "Asia/Kolkata"
     });
};

async function cleanupExpiredSessions() {
     let u = await User.deleteMany({ isVerified: false, createdAt: { $lt: new Date(Date.now() - 24 * 60 * 60 * 1000) } });
}
