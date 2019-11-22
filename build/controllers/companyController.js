"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.companyDetail = exports.postAddCompany = exports.getAddCompany = void 0;

var _routes = _interopRequireDefault(require("../routes"));

var _Company = _interopRequireDefault(require("../models/Company"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Add Company
var getAddCompany = function getAddCompany(req, res) {
  return res.render("addCompany", {
    pageTitle: "제조사 등록"
  });
};

exports.getAddCompany = getAddCompany;

var postAddCompany =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, imageUrl, homepage, newCompany;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, imageUrl = _req$body.imageUrl, homepage = _req$body.homepage;
            _context.next = 3;
            return _Company["default"].create({
              name: name,
              imageUrl: imageUrl,
              homepage: homepage
            });

          case 3:
            newCompany = _context.sent;
            res.redirect(_routes["default"].companyDetail(newCompany.id));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function postAddCompany(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.postAddCompany = postAddCompany;

var companyDetail =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id, company;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _Company["default"].findById(id).populate("phones");

          case 4:
            company = _context2.sent;
            res.render("companyDetail", {
              pageTitle: "'".concat(company.name, "' \uBAA9\uB85D"),
              company: company
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            res.redirect(_routes["default"].home);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function companyDetail(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.companyDetail = companyDetail;