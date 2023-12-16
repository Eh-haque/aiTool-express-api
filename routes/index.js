import { Router } from "express";
import aiToolRouter from "./aiTool.js";
const router = Router();

router.use("/ai_tool", aiToolRouter);

export default router;
