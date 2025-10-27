import mongoose from 'mongoose';

export const connectToDB = async () => {
  try{
    const mongoUri = process.env.MONGODB_URI || process.env.DATABASE_URL || 'mongodb://localhost:27017/bite-bazzar';
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB");
  }catch(error){
    console.log("Error connecting to MongoDB:", error);
  }
}