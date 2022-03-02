import express from "express";

const router = express.Router();

import {newUser, createSession, deleteSession} from '../controllers/auth.controller.js'

router.all("/signup", newUser);
router.all("/login", createSession);
router.get("/logout", deleteSession);

export default router;