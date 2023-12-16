import { Router } from "express";
import { aiTool } from "../controllers/aiTool.js";

const aiToolRouter = Router();

// aiToolRouter.route("/").get(aiTool.getTools);
aiToolRouter.get("/", aiTool.getTools);

export default aiToolRouter;
