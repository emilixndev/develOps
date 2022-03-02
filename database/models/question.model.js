import pkg from 'mongoose';
const {Schema, model} = pkg;


const questionSchema = Schema({
    content: String,
})


export const Question = model("question",questionSchema);
