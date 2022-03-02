
import pkg from 'mongoose';
const {Schema, model} = pkg;


const quizSchema = Schema({
    id_article: {type: Schema.Types.ObjectId, ref:"article"},
    title: String,
},
    {timestamps: true})

export const Quiz = model("quiz",quizSchema);
