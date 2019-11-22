/* eslint-disable camelcase */
import routes from "../routes";
import Company from "../models/Company";

// Add Company

export const getAddCompany = (req, res) =>
  res.render("addCompany", { pageTitle: "제조사 등록" });

export const postAddCompany = async (req, res) => {
  const {
    body: { name, imageUrl, homepage }
  } = req;
  const newCompany = await Company.create({ name, imageUrl, homepage });
  res.redirect(routes.companyDetail(newCompany.id));
};

export const companyDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const company = await Company.findById(id).populate("phones");
    res.render("companyDetail", {
      pageTitle: `'${company.name}' 목록`,
      company
    });
  } catch (error) {
    res.redirect(routes.home);
  }
};
