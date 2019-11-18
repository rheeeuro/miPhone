// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

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

// Github

const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

// Naver

const NAVER = "/auth/naver";
const NAVER_CALLBACK = "/auth/naver/callback";

// API

const API = "/api";
const ADD_COMMENT = "/:id/comment";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: id => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  phones: PHONES,
  upload: UPLOAD,
  phoneDetail: id => {
    if (id) {
      return `/phones/${id}`;
    } else {
      return PHONE_DETAIL;
    }
  },
  editPhone: id => {
    if (id) {
      return `/phones/${id}/edit`;
    } else {
      return EDIT_PHONE;
    }
  },
  deletePhone: id => {
    if (id) {
      return `/phones/${id}/delete`;
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
  addCompare: id => {
    if (id) {
      return `/phones/${id}/add-compare`;
    } else {
      return ADD_COMPARE;
    }
  },
  deleteCompare: id => {
    if (id) {
      return `/phones/${id}/delete-compare`;
    } else {
      return DELETE_COMPARE;
    }
  },
  api: API,
  addComment: ADD_COMMENT
};

export default routes;
