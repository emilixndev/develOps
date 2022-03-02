import express from "express";
import path from "path";
import favicon from "serve-favicon";
import routing from "./routes/static.routes.js";
import "dotenv/config";
import { config } from "./config/config.js";
import "./database/index.js";
import session from 'express-session';
const app = express();
const { LOCALHOST, PORT } = config;
import MongoStore from 'connect-mongo';



app.set("views", "./views");// répertoire où se trouvent nos vues
app.set("view engine", "ejs");// moteur de modèle à utiliser

app.use(express.static("public"));
app.use(express.json()); // pour parser content-type:application/json
app.use(express.urlencoded({ extended: true })); // pour parser content-type: application/x-www-form-urlencoded
// true pour utiliser la librairie qs, permets de récuper un objet pur { name: jako,age : 12}
// false pour utiliser la librairie querystring, permets de récuperer un nested object (objet imbriqué), aussi parse l'url en enlevant le ? de l'url

app.use(routing);

app.listen(PORT, () => {
    console.log(`app listening at http://${LOCALHOST}:${PORT}`);
});