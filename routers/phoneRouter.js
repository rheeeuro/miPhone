import express from "express";
import routes from "../routes";
import {
  phones,
  upload,
  phoneDetail,
  editPhone,
  deletePhone
} from "../controllers/phoneController";

const phoneRouter = express.Router();

phoneRouter.get(routes.upload, upload);
phoneRouter.get(routes.phoneDetail, phoneDetail);
phoneRouter.get(routes.editPhone, editPhone);
phoneRouter.get(routes.deletePhone, deletePhone);

export default phoneRouter;
