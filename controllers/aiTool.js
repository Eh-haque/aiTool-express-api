import AITool from "../models/AITool.js";

const getTools = async (req, res, next) => {
  try {
    const data = await AITool.find();
    res.status(200).send({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const aiTool = {
  getTools,
};
