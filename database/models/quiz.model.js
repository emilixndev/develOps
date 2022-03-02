
import pkg from 'mongoose';
const {Schema, model} = pkg;


const quizSchema = Schema({
    _id : Schema.Types.ObjectId,
    id_article: {type: Schema.Types.ObjectId, ref:"article"},
    title: String,
    created_at: timestamps
})

export const Quiz = model("quiz",quizSchema);
