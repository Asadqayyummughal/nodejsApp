import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (excep) {
    console.log("exception occured in connceting with mongo db", excep);
  }
};
