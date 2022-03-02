import pkg from 'mongoose';
const {Schema, model} = pkg;


const userSchema = Schema({
    id_role: {type: Schema.Types.ObjectId, ref:"roles"},
    username: String,
    email : Number,
    password : String,
})

export const User = model("user",userSchema);