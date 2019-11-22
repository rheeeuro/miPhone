"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addMy = exports.postAddComment = exports.deleteCompare = exports.addCompare = exports.deletePhone = exports.postEditPhone = exports.getEditPhone = exports.phoneDetail = exports.postUpload = exports.getUpload = exports.search = exports.home = void 0;

var _routes = _interopRequireDefault(require("../routes"));

var _Phone = _interopRequireDefault(require("../models/Phone"));

var _User = _interopRequireDefault(require("../models/User"));

var _Comment = _interopRequireDefault(require("../models/Comment"));

var _Company = _interopRequireDefault(require("../models/Company"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Home
var home =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var companies;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Company["default"].find({}).populate("phones");

          case 3:
            companies = _context.sent;
            res.render("home", {
              pageTitle: "홈",
              companies: companies
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.render("home", {
              pageTitle: "홈",
              companies: []
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function home(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // Search


exports.home = home;

var search =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var searchingBy, phones;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            searchingBy = req.query.term;
            phones = [];
            _context2.prev = 2;
            _context2.next = 5;
            return _Phone["default"].find({
              name: {
                $regex: searchingBy,
                $options: "i"
              }
            });

          case 5:
            phones = _context2.sent;
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](2);
            console.log(_context2.t0);

          case 11:
            res.render("search", {
              pageTitle: "검색",
              searchingBy: searchingBy,
              phones: phones
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 8]]);
  }));

  return function search(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // Upload


exports.search = search;

var getUpload = function getUpload(req, res) {
  return res.render("upload", {
    pageTitle: "정보 업로드"
  });
};

exports.getUpload = getUpload;

var postUpload =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, imageUrl, name, model, company, releaseDate, releasePrice, releaseOS, material, WxHxD_W, WxHxD_H, WxHxD_D, weight, size, resolution_W, resolution_H, ppi, Dtype, Dwidth, Dheight, AP, CPU, core, CPUClock, GPU, RAM, memory, sensor, aperture, flash, videoFrame, mAH, Btype, wireless, newPhone, companyMade;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log(req.body);
            _req$body = req.body, imageUrl = _req$body.imageUrl, name = _req$body.name, model = _req$body.model, company = _req$body.company, releaseDate = _req$body.releaseDate, releasePrice = _req$body.releasePrice, releaseOS = _req$body.releaseOS, material = _req$body.material, WxHxD_W = _req$body.WxHxD_W, WxHxD_H = _req$body.WxHxD_H, WxHxD_D = _req$body.WxHxD_D, weight = _req$body.weight, size = _req$body.size, resolution_W = _req$body.resolution_W, resolution_H = _req$body.resolution_H, ppi = _req$body.ppi, Dtype = _req$body.Dtype, Dwidth = _req$body.Dwidth, Dheight = _req$body.Dheight, AP = _req$body.AP, CPU = _req$body.CPU, core = _req$body.core, CPUClock = _req$body.CPUClock, GPU = _req$body.GPU, RAM = _req$body.RAM, memory = _req$body.memory, sensor = _req$body.sensor, aperture = _req$body.aperture, flash = _req$body.flash, videoFrame = _req$body.videoFrame, mAH = _req$body.mAH, Btype = _req$body.Btype, wireless = _req$body.wireless;
            _context3.next = 4;
            return _Phone["default"].create({
              imageUrl: imageUrl,
              name: name,
              model: model,
              company: company,
              releaseDate: releaseDate,
              releasePrice: releasePrice,
              releaseOS: releaseOS,
              specification: {
                appearance: {
                  material: material,
                  WxHxD: {
                    w: WxHxD_W,
                    h: WxHxD_H,
                    d: WxHxD_D
                  },
                  weight: weight
                },
                display: {
                  size: size,
                  resolution: {
                    w: resolution_W,
                    h: resolution_H
                  },
                  ppi: ppi,
                  Dtype: Dtype,
                  Dwidth: Dwidth,
                  Dheight: Dheight
                },
                performance: {
                  AP: AP,
                  CPU: CPU,
                  core: core,
                  CPUClock: CPUClock,
                  GPU: GPU,
                  RAM: RAM,
                  memory: memory
                },
                camera: {
                  sensor: sensor,
                  aperture: aperture,
                  flash: flash,
                  videoFrame: videoFrame
                },
                battery: {
                  mAH: mAH,
                  Btype: Btype,
                  wireless: wireless
                }
              }
            });

          case 4:
            newPhone = _context3.sent;
            _context3.prev = 5;
            _context3.next = 8;
            return _Company["default"].findOne({
              name: company
            });

          case 8:
            companyMade = _context3.sent;
            console.log(companyMade);
            companyMade.phones.push(newPhone.id);
            companyMade.save();
            _context3.next = 17;
            break;

          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](5);
            console.log(_context3.t0);

          case 17:
            res.redirect(_routes["default"].phoneDetail(newPhone.id));

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[5, 14]]);
  }));

  return function postUpload(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); // Phone Detail


exports.postUpload = postUpload;

var phoneDetail =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id, phone;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _Phone["default"].findById(id).populate("comments");

          case 4:
            phone = _context4.sent;
            res.render("phoneDetail", {
              pageTitle: "".concat(phone.name, " \uC815\uBCF4"),
              phone: phone
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            res.redirect(_routes["default"].home);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));

  return function phoneDetail(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); // Edit Phone


exports.phoneDetail = phoneDetail;

var getEditPhone =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id, phone;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.prev = 1;
            _context5.next = 4;
            return _Phone["default"].findById(id);

          case 4:
            phone = _context5.sent;
            res.render("editPhone", {
              pageTitle: "".concat(phone.name, " \uC815\uBCF4 \uC218\uC815"),
              phone: phone
            });
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            res.redirect(_routes["default"].home);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 8]]);
  }));

  return function getEditPhone(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getEditPhone = getEditPhone;

var postEditPhone =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, imageUrl, name, model, company, releaseDate, releasePrice, releaseOS, material, WxHxD_W, WxHxD_H, WxHxD_D, weight, size, resolution_W, resolution_H, ppi, Dtype, Dwidth, Dheight, AP, CPU, core, CPUClock, GPU, RAM, memory, sensor, aperture, flash, videoFrame, mAH, Btype, wireless;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id, _req$body2 = req.body, imageUrl = _req$body2.imageUrl, name = _req$body2.name, model = _req$body2.model, company = _req$body2.company, releaseDate = _req$body2.releaseDate, releasePrice = _req$body2.releasePrice, releaseOS = _req$body2.releaseOS, material = _req$body2.material, WxHxD_W = _req$body2.WxHxD_W, WxHxD_H = _req$body2.WxHxD_H, WxHxD_D = _req$body2.WxHxD_D, weight = _req$body2.weight, size = _req$body2.size, resolution_W = _req$body2.resolution_W, resolution_H = _req$body2.resolution_H, ppi = _req$body2.ppi, Dtype = _req$body2.Dtype, Dwidth = _req$body2.Dwidth, Dheight = _req$body2.Dheight, AP = _req$body2.AP, CPU = _req$body2.CPU, core = _req$body2.core, CPUClock = _req$body2.CPUClock, GPU = _req$body2.GPU, RAM = _req$body2.RAM, memory = _req$body2.memory, sensor = _req$body2.sensor, aperture = _req$body2.aperture, flash = _req$body2.flash, videoFrame = _req$body2.videoFrame, mAH = _req$body2.mAH, Btype = _req$body2.Btype, wireless = _req$body2.wireless;
            _context6.prev = 1;
            _context6.next = 4;
            return _Phone["default"].findOneAndUpdate({
              _id: id
            }, {
              imageUrl: imageUrl,
              name: name,
              model: model,
              company: company,
              releaseDate: releaseDate,
              releasePrice: releasePrice,
              releaseOS: releaseOS,
              specification: {
                appearance: {
                  material: material,
                  WxHxD: {
                    w: WxHxD_W,
                    h: WxHxD_H,
                    d: WxHxD_D
                  },
                  weight: weight
                },
                display: {
                  size: size,
                  resolution: {
                    w: resolution_W,
                    h: resolution_H
                  },
                  ppi: ppi,
                  Dtype: Dtype,
                  Dwidth: Dwidth,
                  Dheight: Dheight
                },
                performance: {
                  AP: AP,
                  CPU: CPU,
                  core: core,
                  CPUClock: CPUClock,
                  GPU: GPU,
                  RAM: RAM,
                  memory: memory
                },
                camera: {
                  sensor: sensor,
                  aperture: aperture,
                  flash: flash,
                  videoFrame: videoFrame
                },
                battery: {
                  mAH: mAH,
                  Btype: Btype,
                  wireless: wireless
                }
              }
            });

          case 4:
            res.redirect(_routes["default"].phoneDetail(id));
            _context6.next = 10;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](1);
            res.redirect(_routes["default"].home);

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 7]]);
  }));

  return function postEditPhone(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}(); // Delete Phone


exports.postEditPhone = postEditPhone;

var deletePhone =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _context7.prev = 1;
            _context7.next = 4;
            return _Phone["default"].findOneAndRemove({
              _id: id
            });

          case 4:
            _context7.next = 9;
            break;

          case 6:
            _context7.prev = 6;
            _context7.t0 = _context7["catch"](1);
            console.log(_context7.t0);

          case 9:
            res.redirect(_routes["default"].home);

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 6]]);
  }));

  return function deletePhone(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}(); // Compare


exports.deletePhone = deletePhone;

var addCompare =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8(req, res) {
    var id, user, mappingCompare;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id = req.params.id;
            _context8.prev = 1;
            _context8.next = 4;
            return _User["default"].findById(req.user.id).populate("compare");

          case 4:
            user = _context8.sent;
            mappingCompare = user.compare.map(function (item) {
              return item.id;
            });

            if (user.compare.length < 3 && !mappingCompare.includes(id)) {
              user.compare.push(id);
              console.log(user.compare.length);
              user.save();
            } else {
              console.log("at most 3");
            }

            _context8.next = 12;
            break;

          case 9:
            _context8.prev = 9;
            _context8.t0 = _context8["catch"](1);
            console.log(_context8.t0);

          case 12:
            res.redirect(_routes["default"].compare);

          case 13:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 9]]);
  }));

  return function addCompare(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.addCompare = addCompare;

var deleteCompare =
/*#__PURE__*/
function () {
  var _ref9 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9(req, res) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            id = req.params.id;
            _context9.prev = 1;
            _context9.next = 4;
            return _User["default"].findById(req.user.id);

          case 4:
            user = _context9.sent;
            user.compare.splice(user.compare.indexOf(id), 1);
            user.save();
            _context9.next = 12;
            break;

          case 9:
            _context9.prev = 9;
            _context9.t0 = _context9["catch"](1);
            console.log(_context9.t0);

          case 12:
            res.redirect(_routes["default"].compare);

          case 13:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 9]]);
  }));

  return function deleteCompare(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}(); // Add Comment


exports.deleteCompare = deleteCompare;

var postAddComment =
/*#__PURE__*/
function () {
  var _ref10 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee10(req, res) {
    var id, comment, user, phone, newComment;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            id = req.params.id, comment = req.body.comment, user = req.user;
            _context10.prev = 1;
            _context10.next = 4;
            return _Phone["default"].findById(id);

          case 4:
            phone = _context10.sent;
            _context10.next = 7;
            return _Comment["default"].create({
              text: comment,
              creator: user.id
            });

          case 7:
            newComment = _context10.sent;
            phone.comments.push(newComment.id);
            phone.save();
            _context10.next = 15;
            break;

          case 12:
            _context10.prev = 12;
            _context10.t0 = _context10["catch"](1);
            res.status(400);

          case 15:
            _context10.prev = 15;
            res.end();
            return _context10.finish(15);

          case 18:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[1, 12, 15, 18]]);
  }));

  return function postAddComment(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}(); // Add My


exports.postAddComment = postAddComment;

var addMy =
/*#__PURE__*/
function () {
  var _ref11 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee11(req, res) {
    var id, user, my, phone;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            id = req.params.id, user = req.user;
            _context11.prev = 1;
            _context11.next = 4;
            return _User["default"].findById(user.id);

          case 4:
            my = _context11.sent;
            _context11.next = 7;
            return _Phone["default"].findById(id);

          case 7:
            phone = _context11.sent;
            my.myphone = phone.id;
            my.save();
            _context11.next = 15;
            break;

          case 12:
            _context11.prev = 12;
            _context11.t0 = _context11["catch"](1);
            res.status(400);

          case 15:
            _context11.prev = 15;
            res.render("userDetail", {
              pageTitle: "내 정보",
              user: req.user
            });
            return _context11.finish(15);

          case 18:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[1, 12, 15, 18]]);
  }));

  return function addMy(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

exports.addMy = addMy;