
import {
    getAllArticles
} from "../queries/article.queries.js";

export const getArticles = async (req, res) => {
    try {
        const Articles = await getAllArticles();
        res.render("static/home", { Articles });
    } catch (err) {
        console.log(err);
    }
};