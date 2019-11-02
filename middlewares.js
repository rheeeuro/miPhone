import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "miPhone";
  res.locals.routes = routes;
  next();
};
