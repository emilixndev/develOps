import { Article } from "../database/models/article.model.js";

export const getAllArticles = () => {
    return Article.find({}).exec();
};
