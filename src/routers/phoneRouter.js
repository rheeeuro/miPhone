import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  phoneDetail,
  deletePhone,
  getEditPhone,
  postEditPhone,
  addCompare,
  deleteCompare,
  addMy
} from "../controllers/phoneController";
import { onlyPrivate } from "../middlewares";

const phoneRouter = express.Router();

// Upload
phoneRouter.get(routes.upload, onlyPrivate, getUpload);
phoneRouter.post(routes.upload, onlyPrivate, postUpload);

// Phone Detail
phoneRouter.get(routes.phoneDetail(), phoneDetail);

// Edit Phone
phoneRouter.get(routes.editPhone(), onlyPrivate, getEditPhone);
phoneRouter.post(routes.editPhone(), onlyPrivate, postEditPhone);

// Delete Phone
phoneRouter.get(routes.deletePhone(), onlyPrivate, deletePhone);

// Compare
phoneRouter.get(routes.addCompare(), onlyPrivate, addCompare);
phoneRouter.get(routes.deleteCompare(), onlyPrivate, deleteCompare);

// Add My
phoneRouter.get(routes.addMy(), onlyPrivate, addMy);

export default phoneRouter;
