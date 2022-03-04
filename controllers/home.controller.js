
import {
    getAllArticles
} from "../queries/article.queries.js";


export const getArticles = async (req, res) => {
    try {
        const Articles = await getAllArticles();
        res.render("layouts/layout", { template: "../static/home", article : Articles});
    } catch (err) {
        console.log(err);
    }
};