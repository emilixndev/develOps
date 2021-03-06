

import pkg from 'mongoose';
const {Schema, model} = pkg;

const answerSchema = Schema({
    content: String,
    isValid: Boolean,
    id_question: {type: Schema.Types.ObjectId, ref:"questions"}
})

export const Answer = model("answer",answerSchema);

