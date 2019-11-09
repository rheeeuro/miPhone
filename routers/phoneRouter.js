import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  phoneDetail,
  deletePhone,
  getEditPhone,
  postEditPhone
} from "../controllers/phoneController";

const phoneRouter = express.Router();

// Upload
phoneRouter.get(routes.upload, getUpload);
phoneRouter.post(routes.upload, postUpload);

// Phone Detail
phoneRouter.get(routes.phoneDetail(), phoneDetail);

// Edit Phone
phoneRouter.get(routes.editPhone(), getEditPhone);
phoneRouter.post(routes.editPhone(), postEditPhone);

// Delete Phone
phoneRouter.get(routes.deletePhone, deletePhone);

export default phoneRouter;
