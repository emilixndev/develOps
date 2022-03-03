import jwt from "jsonwebtoken";
import {createUser} from "../queries/user.queries.js";
import {User}  from "../database/models/user.model.js";



export const createSession = async (req, res) => {
    try {

        if (req.method === "GET") {
            res.render("auth/login", { error: null });
        }

        if (req.method === "POST") {
            const { email, pwd } = req.body;


            const user = await User.findOne({email: email});
            console.log(user)
            if (!user) {

                res.render("layout", {
                    template: "auth/login",
                    error: "no user with this alias",
                });
                return;
            }

            const pwdChecked = await user.comparePassword(pwd, user.password);

            if (pwdChecked) {
                req.session.token = jwt.sign(
                    { userId: user._id },
                    "RANDOM_TOKEN_SECRET",
                    { expiresIn: "24h" }
                );
                req.session.userId = user._id;
                req.session.alias = user.name;

                res.redirect("/");
                return;
            }

            res.render("layout", {
                template: "auth/login",
                error: "bad password",
            });
        }
    } catch (err) {
        throw err;
    }
};

export const deleteSession = (req, res, next) => {
    req.session.destroy();
    res.redirect("/");
};

export const newUser = async (req, res) => {
    if (req.method === "GET") {
        res.render("auth/register", { template: "auth/register" });
    }
    if (req.method === "POST") {
        try {
            const body = req.body;
            const user = await createUser(body);
            res.redirect("login");
        } catch (err) {
            console.log(err.message)
            res.render("static/home", { error: err.message });
        }
    }
};


