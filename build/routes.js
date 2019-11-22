"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// Global
var HOME = "/";
var JOIN = "/join";
var LOGIN = "/login";
var LOGOUT = "/logout";
var SEARCH = "/search"; // Users

var USERS = "/users";
var USER_DETAIL = "/:id";
var EDIT_PROFILE = "/edit-profile";
var CHANGE_PASSWORD = "/change-password";
var ME = "/me";
var COMPARE = "/compare"; // Phone

var PHONES = "/phones";
var UPLOAD = "/upload";
var PHONE_DETAIL = "/:id";
var EDIT_PHONE = "/:id/edit";
var DELETE_PHONE = "/:id/delete";
var ADD_COMPARE = "/:id/add-compare";
var DELETE_COMPARE = "/:id/delete-compare";
var ADD_MY = "/:id/add-my"; // Github

var GITHUB = "/auth/github";
var GITHUB_CALLBACK = "/auth/github/callback"; // Naver

var NAVER = "/auth/naver";
var NAVER_CALLBACK = "/auth/naver/callback"; // API

var API = "/api";
var ADD_COMMENT = "/:id/comment"; // Company

var COMPANY = "/companies";
var ADD_COMPANY = "/add";
var COMPANY_DETAIL = "/:id";
var routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: function userDetail(id) {
    if (id) {
      return "/users/".concat(id);
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  phones: PHONES,
  upload: UPLOAD,
  phoneDetail: function phoneDetail(id) {
    if (id) {
      return "/phones/".concat(id);
    } else {
      return PHONE_DETAIL;
    }
  },
  editPhone: function editPhone(id) {
    if (id) {
      return "/phones/".concat(id, "/edit");
    } else {
      return EDIT_PHONE;
    }
  },
  deletePhone: function deletePhone(id) {
    if (id) {
      return "/phones/".concat(id, "/delete");
    } else {
      return DELETE_PHONE;
    }
  },
  gitHub: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  naver: NAVER,
  naverCallback: NAVER_CALLBACK,
  me: ME,
  compare: COMPARE,
  addCompare: function addCompare(id) {
    if (id) {
      return "/phones/".concat(id, "/add-compare");
    } else {
      return ADD_COMPARE;
    }
  },
  deleteCompare: function deleteCompare(id) {
    if (id) {
      return "/phones/".concat(id, "/delete-compare");
    } else {
      return DELETE_COMPARE;
    }
  },
  addMy: function addMy(id) {
    if (id) {
      return "/phones/".concat(id, "/add-my");
    } else {
      return ADD_MY;
    }
  },
  api: API,
  addComment: ADD_COMMENT,
  company: COMPANY,
  addCompany: ADD_COMPANY,
  companyDetail: function companyDetail(id) {
    if (id) {
      return "/companies/".concat(id);
    } else {
      return COMPANY_DETAIL;
    }
  }
};
var _default = routes;
exports["default"] = _default;