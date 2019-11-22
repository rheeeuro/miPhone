"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CompanySchema = new _mongoose["default"].Schema({
  name: String,
  imageUrl: {
    type: String,
    required: "Image URL is required"
  },
  homepage: String,
  phones: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Phone"
  }]
});

var model = _mongoose["default"].model("Company", CompanySchema);

var _default = model;
exports["default"] = _default;