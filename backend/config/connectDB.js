import { setServers } from "node:dns";
import mongoose from "mongoose";

// Force Node.js to use public DNS servers to resolve the MongoDB SRV record
setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB Connected");
  } catch (error) {
    console.log(`DB Error: ${error}`);
  }
};

export default connectDB;
