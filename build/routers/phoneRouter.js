"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

var _phoneController = require("../controllers/phoneController");

var _middlewares = require("../middlewares");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var phoneRouter = _express["default"].Router(); // Upload


phoneRouter.get(_routes["default"].upload, _middlewares.onlyPrivate, _phoneController.getUpload);
phoneRouter.post(_routes["default"].upload, _middlewares.onlyPrivate, _phoneController.postUpload); // Phone Detail

phoneRouter.get(_routes["default"].phoneDetail(), _phoneController.phoneDetail); // Edit Phone

phoneRouter.get(_routes["default"].editPhone(), _middlewares.onlyPrivate, _phoneController.getEditPhone);
phoneRouter.post(_routes["default"].editPhone(), _middlewares.onlyPrivate, _phoneController.postEditPhone); // Delete Phone

phoneRouter.get(_routes["default"].deletePhone(), _middlewares.onlyPrivate, _phoneController.deletePhone); // Compare

phoneRouter.get(_routes["default"].addCompare(), _middlewares.onlyPrivate, _phoneController.addCompare);
phoneRouter.get(_routes["default"].deleteCompare(), _middlewares.onlyPrivate, _phoneController.deleteCompare); // Add My

phoneRouter.get(_routes["default"].addMy(), _middlewares.onlyPrivate, _phoneController.addMy);
var _default = phoneRouter;
exports["default"] = _default;