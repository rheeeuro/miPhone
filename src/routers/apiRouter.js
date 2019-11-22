import express from "express";
import routes from "../routes";
import { postAddComment, deleteComment } from "../controllers/phoneController";
import { onlyPrivate } from "../middlewares";

const apiRouter = express.Router();

apiRouter.post(routes.addComment, postAddComment);
apiRouter.get(routes.deleteComment(), onlyPrivate, deleteComment);

export default apiRouter;
