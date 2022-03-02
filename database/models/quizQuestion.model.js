

import pkg from 'mongoose';
const {Schema, model} = pkg;

const quizQuestionSchema = Schema({
    id_question: {type: Schema.Types.ObjectId, ref:"questions"},
    id_quiz: {type: Schema.Types.ObjectId, ref:"quiz"}
})


export const QuizQuestion = model("quizquestion",quizQuestionSchema);

