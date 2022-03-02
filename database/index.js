import mongoose from "mongoose";

const { DB_HOST, DB_PORT, DB_NAME } = process.env;

mongoose
    .connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
        // avoid deprecation warning
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((res) => {
        console.log(
            `Connected to ${res.connection.name} database on http://${res.connection.host}:${res.connection.port}`
        );
    })
    .catch((err) => {
        console.log("ERROR", err);
    });
