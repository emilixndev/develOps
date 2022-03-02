// import User model


export const getUser = async (req, res) => {
    try {
        const { body: { id } } = req;

        const user = await User.findOne({ index: { $eq: id } });

        res.render('users/me', {user});
    } catch (err) {
        console.log(err);
    }
}


export const editUser = async (req, res) => {
    try {
        const { body: { id } } = req;

        await User.findOneAndUpdate(
            {index: id},
            {$set: body}
        );

        res.redirect(303, '/users/me');
    } catch (err) {
        console.log(err);
    }
} 

export const deleteUser = async (req, res) => {
    try {
        const { body: { id } } = req;

        const user = await User.findOneAndDelete({ index: { $eq: id } });

        res.render('/');
    } catch (err) {
        console.log(err);
    }
}