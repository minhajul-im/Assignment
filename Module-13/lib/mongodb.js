import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connect done mongodb");
  } catch (e) {
    console.log("connecting failed mongoDB", e);
  }
};
