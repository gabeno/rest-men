import mongoose from "mongoose";

export const connectDb = () => {
  mongoose.Promise = Promise;
  mongoose.connect(process.env.MONGO_URL);
  mongoose.connection.on("error", (err: Error) => {
    console.log(`Error: ${err}`);
  });
};