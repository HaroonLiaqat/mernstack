import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "");
    console.log("Connected to the database successfully");
  } catch (err) {
    console.log("Error connecting to the database", err);
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("Database disconnected successfully");
  } catch (err) {
    console.log("Error disconnecting from the database", err);
  }
};

export { connectDB, disconnectDB };
