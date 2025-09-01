import mongoose from 'mongoose';

export const connectDB =async ()=>{
    try{
       await mongoose.connect("mongodb+srv://jonimadushanka010414:jglEK2HefA5CGvNH@cluster0.m5vegxv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("MongoDB connected successfully");
        
    }
    catch(error){
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process with failure
    }
}