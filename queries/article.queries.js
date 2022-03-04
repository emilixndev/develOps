import { Article } from "../database/models/article.model.js";
import {Category} from "../database/models/category.model.js";


export const getAllArticles = async () => {

    const articles = await Article.find({}).exec();
    console.log(articles)
    const lastFourArticles = articles.sort((a,b)=>b.createdAt -a.createdAt)

    return lastFourArticles.slice(0,4);



};








export const createArticle = async (article) => {
    try {
        const newArticle = new Article({
            content: article.articleBody,
            title: article.title,
            id_category : article.id_category
        });
        return newArticle.save();
    } catch (err) {
        throw err;
    }
};

export const getCategory = () => {
    return Category.find({}).exec();
};

export const getCategoryByLabel = async (alias) => {
    const category = await Category.findOne({ label: alias })
    return category
}