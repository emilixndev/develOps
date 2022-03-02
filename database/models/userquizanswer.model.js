import pkg from 'mongoose';
const {Schema, model} = pkg;



const user_quiz_answersSchema = Schema({
    id_answers: {type: Schema.Types.ObjectId, ref:"answers"},
    id_quiz: {type: Schema.Types.ObjectId, ref:"quiz"},
    attempt : Number,
})


export const UserQuizAnswer = model("userquizanswer",user_quiz_answersSchema);