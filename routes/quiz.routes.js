import express from "express";
import { getQuizzes, getQuiz, saveQuiz, editQuiz, deleteQuiz } from "../controllers/quiz.controller";

const {Router} = express;
const quizRouter = Router();

// fetch all quizzes
quizRouter.get('/quiz/all', getQuizzes);

// fetch one quiz
quizRouter.get('/quiz/:id', getQuiz);

// save new quiz
quizRouter.post('/quiz/new', saveQuiz);

// edit existing quiz
quizRouter.post('/quiz/:id/edit', editQuiz);

// delete one quiz
quizRouter.get('/quiz/:id/delete', deleteQuiz);

export default quizRouter;
