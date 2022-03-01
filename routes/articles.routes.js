import express from "express";
import { getArticles, getArticle, saveNewArticle, editArticle, deleteArticle} from "../controllers/articles.controller";

const {Router} = express;
const articlesRouter = Router();

// fetch all articles
articlesRouter.get('/articles/all', getArticles);

// fetch one article
articlesRouter.get('/articles/:id', getArticle);

// save new article
articlesRouter.post('/articles/new', saveNewArticle);

// edit existing article
articlesRouter.post('/articles/:id/edit', editArticle);

// delete one article
articlesRouter.get('/articles/:id/delete', deleteArticle);

export default articlesRouter;