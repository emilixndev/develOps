import { User }  from "../database/models/user.model.js";


export const createUser = async (user) => {
    try {

        const hash = await User.hashPassword(user.password);
        const newUser = new User({
            username: user.username,
            password: hash,
            email: user.email,
            id_role: "62208d165aca0eedc102de40"
        });
        return newUser.save();
    } catch (err) {
        throw err;
    }
};