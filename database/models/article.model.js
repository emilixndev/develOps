import pkg from 'mongoose';
const {Schema, model} = pkg;


const articleSchema = Schema({
    id_category: {type: Schema.Types.ObjectId, ref:"category"},
    id_user: {type: Schema.Types.ObjectId, ref:"user"},
    title: String,
    content: String,
},
    {timestamps: true}
    )

export const Article = model("article",articleSchema);