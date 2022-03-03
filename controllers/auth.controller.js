import {createUser} from "../queries/user.queries.js";
import {User} from "../database/models/user.model.js";



export const createSession = async (req, res) => {
    try {

        if (req.method === "GET") {
            res.render("layouts/layout", { template: "../auth/login" });
        }

        if (req.method === "POST") {
            const { email, password } = req.body;
            const user = await User.findOne({email: email});

            if (!user) {
                res.render("layout", {
                    template: "auth/login",
                    error: "no user with this alias",
                });
                return;
            }

            const pwdChecked = await user.comparePassword(password, user.password);
            if (pwdChecked) {

                req.session.userId = user._id;
                req.session.username = user.username;

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
        res.render("layouts/layout", { template: "../auth/register" });
    }
    if (req.method === "POST") {

        try {
            const body = req.body;
            const user = await createUser(body);
            res.redirect("layouts/layout", { template:"../auth/login" });
        } catch (err) {
            console.log(err.message)
            res.render("static/home", { error: err.message });
        }
    }
};


