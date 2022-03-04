// import Article model

import {Article} from "../database/models/article.model.js";
import {createArticle, getCategory, getCategoryByLabel} from "../queries/article.queries.js";


// export const getArticles = async (req, res) => {
//     try {
//         const articles = await Article.find({}).exec();
//
//         res.render('articles/all', {articles});
//     } catch (err) {
//         console.log(err);
//     }
// }
//
// export const getArticle = async (req, res) => {
//     try {
//         const { body: { id } } = req;
//
//         const article = await Article.findOne({ index: { $eq: id } });
//
//         res.render('articles/show', {article});
//     } catch (err) {
//         console.log(err);
//     }
// }

export const saveNewArticle = async (req, res) => {


    if (req.method === "GET") {

        const category = await getCategory();
        console.log(category)

        res.render("layouts/layout", { template: "../articles/new", category : category });
    }


    if (req.method === "POST") {

        try {
            let body = req.body;
            console.log(req.body)

            const category = await getCategoryByLabel(body.category);
             console.log(category)


            body = {...body,id_category : category._id }


            console.log(body)


            const article = await createArticle(body);
            res.render("layouts/layout", { template:"../static/home" });
        } catch (err) {
            console.log(err.message)
            res.render("static/home", { error: err.message });
        }
    }

    // try {
    //     const { body } = req;
    //
    //     const newArticle = new Article(body);
    //
    //     await newArticle.save();
    //
    //     res.redirect(303, '/articles/all');
    // } catch (err) {
    //     console.log(err);
    // }
}

// export const editArticle = async (req, res) => {
//     try {
//         const { body: { id } } = req;
//
//         await Article.findOneAndUpdate(
//             {index: id},
//             {$set: body}
//         );
//
//         res.redirect(303, '/articles/show');
//     } catch (err) {
//         console.log(err);
//     }
// }
//
// export const deleteArticle = async (req, res) => {
//     try {
//         const { body: { id } } = req;
//
//         const article = await Article.findOneAndDelete({ index: { $eq: id } });
//
//         res.render('articles/all');
//     } catch (err) {
//         console.log(err);
//     }
// }