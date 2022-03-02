import pkg from 'mongoose';
const {Schema, model} = pkg;


const categorySchema = Schema({
    _id : Schema.Types.ObjectId,
    label: String,
})


export const Category = model("category",categorySchema);