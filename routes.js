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

// Phone

const PHONES = "/phones";
const UPLOAD = "/upload";
const PHONE_DETAIL = "/:id";
const EDIT_PHONE = "/:id/edit";
const DELETE_PHONE = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  phones: PHONES,
  upload: UPLOAD,
  phoneDetail: PHONE_DETAIL,
  editPhone: EDIT_PHONE,
  deletePhone: DELETE_PHONE
};

export default routes;
