import pkg from 'mongoose';
const {Schema, model} = pkg;

const rolesSchema = Schema({
    _id : Schema.Types.ObjectId,
    label: String
})

export const Roles = model("roles",rolesSchema);
