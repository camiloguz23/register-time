//mongodb+srv://camiloNode:<password>
import mongoose from 'mongoose';

const database = process.env.DATABASE ?? ''

export const mongodbConnect = async () => {
  await mongoose.connect(database);
};
