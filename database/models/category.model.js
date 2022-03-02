import pkg from 'mongoose';
const {Schema, model} = pkg;


const categorySchema = Schema({
    label: String,
})


export const Category = model("category",categorySchema);