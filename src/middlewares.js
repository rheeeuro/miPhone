import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

export const formatDate = date => {
  const d = new Date(date);
  return [d.getFullYear(), d.getMonth() + 1, d.getDate()].join(". ");
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "miPhone";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  res.locals.formatDate = formatDate;
  res.locals.admin = process.env.ADMIN_ID;
  next();
};
