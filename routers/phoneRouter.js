import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  phoneDetail,
  editPhone,
  deletePhone
} from "../controllers/phoneController";

const phoneRouter = express.Router();

phoneRouter.get(routes.upload, getUpload);
phoneRouter.post(routes.upload, postUpload);
phoneRouter.get(routes.phoneDetail(), phoneDetail);
phoneRouter.get(routes.editPhone, editPhone);
phoneRouter.get(routes.deletePhone, deletePhone);

export default phoneRouter;
