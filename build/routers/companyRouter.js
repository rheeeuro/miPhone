"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

var _companyController = require("../controllers/companyController");

var _middlewares = require("../middlewares");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var companyRouter = _express["default"].Router();

companyRouter.get(_routes["default"].addCompany, _middlewares.onlyPrivate, _companyController.getAddCompany);
companyRouter.post(_routes["default"].addCompany, _middlewares.onlyPrivate, _companyController.postAddCompany);
companyRouter.get(_routes["default"].companyDetail(), _companyController.companyDetail);
var _default = companyRouter;
exports["default"] = _default;