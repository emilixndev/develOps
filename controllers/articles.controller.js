// import Article model

export const getArticles = async (req, res) => {
    try {
        const articles = await Article.find({}).exec();

        res.render('articles/all', {articles});
    } catch (err) {
        console.log(err);
    }
}

export const getArticle = async (req, res) => {
    try {
        const { body: { id } } = req;

        const article = await Article.findOne({ index: { $eq: id } });

        res.render('articles/show', {article});
    } catch (err) {
        console.log(err);
    }
}

export const saveNewArticle = async (req, res) => {
    try {
        const { body } = req;

        const newArticle = new Article(body);

        await newArticle.save();
        
        res.redirect(303, '/articles/all');
    } catch (err) {
        console.log(err);
    }
}

export const editArticle = async (req, res) => {
    try {
        const { body: { id } } = req;

        await Article.findOneAndUpdate(
            {index: id},
            {$set: body}
        );

        res.redirect(303, '/articles/show');
    } catch (err) {
        console.log(err);
    }
} 

export const deleteArticle = async (req, res) => {
    try {
        const { body: { id } } = req;

        const article = await Article.findOneAndDelete({ index: { $eq: id } });

        res.render('articles/all');
    } catch (err) {
        console.log(err);
    }
}