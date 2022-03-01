// import Admin model

export const getAdmin = async (req, res) => {
    try {
        const { body: { id } } = req;

        const admin = await Admin.findOne({ index: { $eq: id } });

        res.render('admin/dashboard', {admin});
    } catch (err) {
        console.log(err);
    }
}