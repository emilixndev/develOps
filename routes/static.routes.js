import express from "express";
import path from "path";

import { getArticles } from "../controllers/home.controller.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import {createSession, deleteSession, newUser} from "../controllers/auth.controller.js";
import { saveNewArticle } from "../controllers/articles.controller.js";
const __dirname = dirname(fileURLToPath(import.meta.url));
const {Router} = express
const staticRouter = Router();

staticRouter.use((req, res, next) => {
    res.locals.username = req.session.username;
    next();
});

staticRouter.all("/article/new",saveNewArticle)
staticRouter.all("/login",createSession);
staticRouter.all("/register",newUser);
staticRouter.all("/logout",deleteSession);
staticRouter.get("/", getArticles);


staticRouter.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "images/404.jpg"));
});

export default staticRouter;