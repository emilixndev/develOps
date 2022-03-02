
import pkg from 'mongoose';
const {Schema, model} = pkg;




const articleSchema = Schema({
    _id : Schema.Types.ObjectId,
    id_category: {type: Schema.Types.ObjectId, ref:"category"},
    id_user: {type: Schema.Types.ObjectId, ref:"user"},
    title: String,
    content: String,
    created_at: timestamps
})

export const Article = model("article",articleSchema);