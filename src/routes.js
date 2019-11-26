// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";
const SPEC_SEARCH = "/spec-search";
const UPLOAD_MENU = "/upload-menu";

// Users

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const ME = "/me";
const COMPARE = "/compare";

// Phone

const PHONES = "/phones";
const UPLOAD = "/upload";
const PHONE_DETAIL = "/:id";
const EDIT_PHONE = "/:id/edit";
const DELETE_PHONE = "/:id/delete";
const ADD_COMPARE = "/:id/add-compare";
const DELETE_COMPARE = "/:id/delete-compare";
const ADD_MY = "/:id/add-my";

// Github

const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

// Naver

const NAVER = "/auth/naver";
const NAVER_CALLBACK = "/auth/naver/callback";

// API

const API = "/api";
const ADD_COMMENT = "/:id/comment";
const DELETE_COMMENT = "/:phoneId/:commentId/delete";

// Company

const COMPANY = "/companies";
const ADD_COMPANY = "/add";
const COMPANY_DETAIL = "/:id";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  specSearch: SPEC_SEARCH,
  uploadMenu: UPLOAD_MENU,
  users: USERS,
  userDetail: id => {
    if (id) {
      return `/users/${id}`;
    }
    return USER_DETAIL;
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  phones: PHONES,
  upload: UPLOAD,
  phoneDetail: id => {
    if (id) {
      return `/phones/${id}`;
    }
    return PHONE_DETAIL;
  },
  editPhone: id => {
    if (id) {
      return `/phones/${id}/edit`;
    }
    return EDIT_PHONE;
  },
  deletePhone: id => {
    if (id) {
      return `/phones/${id}/delete`;
    }
    return DELETE_PHONE;
  },
  gitHub: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  naver: NAVER,
  naverCallback: NAVER_CALLBACK,
  me: ME,
  compare: COMPARE,
  addCompare: id => {
    if (id) {
      return `/phones/${id}/add-compare`;
    }
    return ADD_COMPARE;
  },
  deleteCompare: id => {
    if (id) {
      return `/phones/${id}/delete-compare`;
    }
    return DELETE_COMPARE;
  },
  addMy: id => {
    if (id) {
      return `/phones/${id}/add-my`;
    }
    return ADD_MY;
  },
  api: API,
  addComment: ADD_COMMENT,
  deleteComment: (phoneId, commentId) => {
    if (phoneId && commentId) {
      return `/api/${phoneId}/${commentId}/delete`;
    }
    return DELETE_COMMENT;
  },
  company: COMPANY,
  addCompany: ADD_COMPANY,
  companyDetail: id => {
    if (id) {
      return `/companies/${id}`;
    }
    return COMPANY_DETAIL;
  }
};

export default routes;
