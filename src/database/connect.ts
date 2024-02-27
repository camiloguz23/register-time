//mongodb+srv://camiloNode:<password>
import mongoose from 'mongoose';

export const mongodbConnect = async () => {
  await mongoose.connect(
    `mongodb+srv:/${process.env.NAME_MONGO}:${process.env.PASSWORD_MONGO}@cluster0.kxz1s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  );
};
