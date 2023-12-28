import { Router } from "express";
import { aiTool } from "../controllers/aiTool.js";

const aiToolRouter = Router();

aiToolRouter
  .route("/:id")
  .get(aiTool.getTool)
  .patch(aiTool.updateTool)
  .delete(aiTool.deleteTool);
aiToolRouter.route("/").get(aiTool.getTools).post(aiTool.createTool);
// aiToolRouter.get("/", aiTool.getTools);

export default aiToolRouter;
