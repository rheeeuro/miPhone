import express from "express";
import routes from "../routes";
import {
  getAddCompany,
  postAddCompany,
  companyDetail
} from "../controllers/companyController";
import { onlyPrivate } from "../middlewares";

const companyRouter = express.Router();

companyRouter.get(routes.addCompany, onlyPrivate, getAddCompany);
companyRouter.post(routes.addCompany, onlyPrivate, postAddCompany);

companyRouter.get(routes.companyDetail(), companyDetail);

export default companyRouter;
