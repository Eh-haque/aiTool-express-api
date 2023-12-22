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
      meta,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const aiTool = {
  getTools,
};
