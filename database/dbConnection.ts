import mongoose from 'mongoose';

// global db instance
let dbInstance;

export default async function () {
  if (!dbInstance) {
    dbInstance = await mongoose.connect(
      process.env.MONGODB_CONNECTION_STRING_TEST,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
        reconnectInterval: 500, // Reconnect every 500ms
        keepAlive: true
      }
    );;
  }
  return dbInstance;
};