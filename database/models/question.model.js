import pkg from 'mongoose';
const {Schema, model} = pkg;


const questionSchema = Schema({
    _id : Schema.Types.ObjectId,
    content: String,
})


export const Question = model("question",questionSchema);
