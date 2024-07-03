import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://kunaltalreja216:kunaltalreja216@cluster0.kgmp259.mongodb.net/food-del').then(()=>console.log("db connected"));
}