import pkg from 'mongoose';
const {Schema, model} = pkg;

const rolesSchema = Schema({
    label: String
})
export const Roles = model("roles",rolesSchema);
