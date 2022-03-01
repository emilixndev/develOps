import express from "express";
import { getUser, editUser, deleteUser } from "../controllers/users.controller";

const usersRouter = express.Router();

usersRouter.get("/users/:id", getUser);

usersRouter.post("/users/:id/edit", editUser);

usersRouter.get("/users/:id/delete", deleteUser);

export default usersRouter;