"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PhoneSchema = new _mongoose["default"].Schema({
  imageUrl: {
    type: String,
    required: "Image URL is required"
  },
  name: {
    type: String,
    required: "Name is required"
  },
  model: {
    type: String,
    required: "Model number is required"
  },
  company: {
    type: String,
    required: "Company is required"
  },
  releaseDate: Date,
  releasePrice: Number,
  releaseOS: String,
  specification: {
    appearance: {
      material: String,
      WxHxD: {
        w: _mongoose["default"].Types.Decimal128,
        h: _mongoose["default"].Types.Decimal128,
        d: _mongoose["default"].Types.Decimal128
      },
      weight: _mongoose["default"].Types.Decimal128
    },
    display: {
      size: _mongoose["default"].Types.Decimal128,
      resolution: {
        w: Number,
        h: Number
      },
      ppi: Number,
      Dtype: String,
      Dwidth: _mongoose["default"].Types.Decimal128,
      Dheight: _mongoose["default"].Types.Decimal128
    },
    performance: {
      AP: String,
      CPU: String,
      core: Number,
      CPUClock: Number,
      GPU: String,
      RAM: Number,
      memory: Number
    },
    camera: {
      sensor: String,
      aperture: String,
      flash: String,
      videoFrame: Number
    },
    battery: {
      mAH: Number,
      Btype: String,
      wireless: Number
    }
  },
  comments: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Comment"
  }]
});

var model = _mongoose["default"].model("Phone", PhoneSchema);

var _default = model;
exports["default"] = _default;