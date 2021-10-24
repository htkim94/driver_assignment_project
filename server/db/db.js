import mongoose from "mongoose";

const CONNECTION_URL = "mongodb+srv://hotaekim:hotaekim123@cluster0.cn494.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

export function connectDb() {
  return mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true});
};