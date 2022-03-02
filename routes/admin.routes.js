import express from "express";
import { getAdmin } from "../controllers/admin.controller.js";

const { Router } = express;
const adminRouter = Router();

adminRouter.get("/admin/dashboard", getAdmin);


export default adminRouter;