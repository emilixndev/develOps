// import Quiz model

export const getQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find({}).exec();

        res.render('quiz/all', {quizzes});
    } catch (err) {
        console.log(err);
    }
}

export const getQuiz = async (req, res) => {
    try {
        const { body: { id } } = req;

        const quiz = await Quiz.findOne({ index: { $eq: id } });

        res.render('quiz/:id', {quiz});
    } catch (err) {
        console.log(err);
    }
}

export const saveQuiz = async (req, res) => {
    try {
        const { body } = req;

        const newQuiz = new Quiz(body);

        await newQuiz.save();
        
        res.redirect(303, '/quiz/all');
    } catch (err) {
        console.log(err);
    }
}

export const editQuiz = async (req, res) => {
    try {
        const { body: { id } } = req;

        await Quiz.findOneAndUpdate(
            {index: id},
            {$set: body}
        );

        res.redirect(303, '/quiz/all');
    } catch (err) {
        console.log(err);
    }
} 

export const deleteQuiz = async (req, res) => {
    try {
        const { body: { id } } = req;

        const quiz = await Quiz.findOneAndDelete({ index: { $eq: id } });

        res.render('quiz/all');
    } catch (err) {
        console.log(err);
    }
}