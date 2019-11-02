import { phones } from "../db";

export const home = (req, res) => {
  res.render("home", { pageTitle: "홈", phones });
};
export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "검색", searchingBy, phones });
};

export const upload = (req, res) =>
  res.render("upload", { pageTitle: "휴대폰 정보 등록" });

export const phoneDetail = (req, res) =>
  res.render("phoneDetail", { pageTitle: "휴대폰 정보" });

export const editPhone = (req, res) =>
  res.render("editPhone", { pageTitle: "휴대폰 정보 수정" });

export const deletePhone = (req, res) =>
  res.render("deletePhone", { pageTitle: "휴대폰 정보 삭제" });
