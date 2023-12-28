import AITool from "../models/AITool.js";
import QueryBuilder from "mongoose-dynamic-querybuilder";

const getTools = async (req, res, next) => {
  try {
    const userQuery = new QueryBuilder(AITool.find({}), req.query);

    const [data, totalData] = await Promise.all([
      userQuery
        .filter()
        .search([
          "title",
          "toolDescription",
          "shortDescription",
          "toolFeature",
          "toolTags",
          "category",
          "subcategories",
        ])
        .sort()
        .paginate()
        .fields().modelQuery,
      userQuery.countTotal(),
    ]);

    const limit = Number(req.query.limit) || 10;
    const meta = {
      limit,
      page: Number(req.query.page) || 1,
      total: totalData,
      totalPage: Math.ceil(totalData / limit),
    };

    res.status(200).send({
      success: true,
      message: "Tools getting successfully",
      meta,
      data,
    });
  } catch (error) {
    next(error);
  }
};

const getTool = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) throw new Error("Invalid ID");

    const data = await AITool.findById(id);

    res.status(200).send({
      success: true,
      message: "Tool getting successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const createTool = async (req, res, next) => {
  try {
    const data = await AITool.create(req.body);

    res.status(200).send({
      success: true,
      message: "Tool created successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const updateTool = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) throw new Error("Invalid ID");

    const data = await AITool.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).send({
      success: true,
      message: "Tool updated successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const deleteTool = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) throw new Error("Invalid ID");

    const data = await AITool.findByIdAndDelete(id);

    res.status(200).send({
      success: true,
      message: "Tool deleted successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const aiTool = {
  getTools,
  getTool,
  createTool,
  updateTool,
  deleteTool,
};
