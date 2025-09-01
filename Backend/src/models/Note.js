import mongoose from "mongoose";

//1-create a schema
//2-create a model based off of that schema


//create schema
const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    content:{
        type:String,
        required: true
        },
    },
    { timestamps: true} //updatedAt, createdAt
);

//create model

const Note =mongoose.model("Note", noteSchema);

export default Note;




