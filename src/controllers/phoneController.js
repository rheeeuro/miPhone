/* eslint-disable camelcase */
import routes from "../routes";
import Phone from "../models/Phone";
import User from "../models/User";
import Comment from "../models/Comment";
import Company from "../models/Company";

// Home

export const home = async (req, res) => {
  try {
    const companies = await Company.find({}).populate("phones");
    res.render("home", { pageTitle: "홈", companies });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "홈", companies: [] });
  }
};

// Search

export const search = async (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  let phones = [];
  try {
    phones = await Phone.find({
      name: { $regex: searchingBy, $options: "i" }
    });
    console.log(phones);
  } catch (error) {
    console.log(error);
  }
  res.render("search", { pageTitle: "검색", searchingBy, phones });
};

// Spec Search

export const specSearch = async (req, res) => {
  const {
    query: { displaySize, price }
  } = req;
  let phones = [];
  try {
    phones = await Phone.find({});
    if (displaySize !== undefined) {
      phones = phones.filter(
        phone => phone.specification.display.size >= displaySize
      );
    }
    if (price !== undefined) {
      phones = phones.filter(phone => phone.releasePrice >= price);
    }
  } catch (error) {
    console.log(error);
  }
  res.render("specSearch", {
    pageTitle: "상세 검색",
    phones,
    displaySize,
    price
  });
};

// Upload

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "정보 업로드" });

export const postUpload = async (req, res) => {
  console.log(req.body);
  const {
    body: {
      imageUrl,
      name,
      model,
      company,
      releaseDate,
      releasePrice,
      releaseOS,
      material,
      WxHxD_W,
      WxHxD_H,
      WxHxD_D,
      weight,
      size,
      resolution_W,
      resolution_H,
      ppi,
      Dtype,
      Dwidth,
      Dheight,
      AP,
      CPU,
      core,
      CPUClock,
      GPU,
      RAM,
      memory,
      sensor,
      aperture,
      flash,
      videoFrame,
      mAH,
      Btype,
      wireless
    }
  } = req;
  const newPhone = await Phone.create({
    imageUrl,
    name,
    model,
    company,
    releaseDate,
    releasePrice,
    releaseOS,
    specification: {
      appearance: {
        material,
        WxHxD: { w: WxHxD_W, h: WxHxD_H, d: WxHxD_D },
        weight
      },
      display: {
        size,
        resolution: { w: resolution_W, h: resolution_H },
        ppi,
        Dtype,
        Dwidth,
        Dheight
      },
      performance: { AP, CPU, core, CPUClock, GPU, RAM, memory },
      camera: { sensor, aperture, flash, videoFrame },
      battery: { mAH, Btype, wireless }
    }
  });
  try {
    const companyMade = await Company.findOne({ name: company });
    console.log(companyMade);
    companyMade.phones.push(newPhone.id);
    companyMade.save();
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.phoneDetail(newPhone.id));
};

// Phone Detail

export const phoneDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const phone = await Phone.findById(id).populate("comments");
    res.render("phoneDetail", { pageTitle: `${phone.name} 정보`, phone });
  } catch (error) {
    res.redirect(routes.home);
  }
};

// Edit Phone

export const getEditPhone = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const phone = await Phone.findById(id);
    res.render("editPhone", { pageTitle: `${phone.name} 정보 수정`, phone });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditPhone = async (req, res) => {
  const {
    params: { id },
    body: {
      imageUrl,
      name,
      model,
      company,
      releaseDate,
      releasePrice,
      releaseOS,
      material,
      WxHxD_W,
      WxHxD_H,
      WxHxD_D,
      weight,
      size,
      resolution_W,
      resolution_H,
      ppi,
      Dtype,
      Dwidth,
      Dheight,
      AP,
      CPU,
      core,
      CPUClock,
      GPU,
      RAM,
      memory,
      sensor,
      aperture,
      flash,
      videoFrame,
      mAH,
      Btype,
      wireless
    }
  } = req;
  try {
    await Phone.findOneAndUpdate(
      { _id: id },
      {
        imageUrl,
        name,
        model,
        company,
        releaseDate,
        releasePrice,
        releaseOS,
        specification: {
          appearance: {
            material,
            WxHxD: { w: WxHxD_W, h: WxHxD_H, d: WxHxD_D },
            weight
          },
          display: {
            size,
            resolution: { w: resolution_W, h: resolution_H },
            ppi,
            Dtype,
            Dwidth,
            Dheight
          },
          performance: { AP, CPU, core, CPUClock, GPU, RAM, memory },
          camera: { sensor, aperture, flash, videoFrame },
          battery: { mAH, Btype, wireless }
        }
      }
    );
    res.redirect(routes.phoneDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

// Delete Phone

export const deletePhone = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    await Phone.findOneAndRemove({ _id: id });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};

// Compare

export const addCompare = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const user = await User.findById(req.user.id).populate("compare");
    const mappingCompare = user.compare.map(item => item.id);
    if (user.compare.length < 3 && !mappingCompare.includes(id)) {
      user.compare.push(id);
      console.log(user.compare.length);
      user.save();
    } else {
      console.log("at most 3");
    }
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.compare);
};

export const deleteCompare = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const user = await User.findById(req.user.id);
    user.compare.splice(user.compare.indexOf(id), 1);
    user.save();
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.compare);
};

// Add Comment

export const postAddComment = async (req, res) => {
  const {
    params: { id },
    body: { comment },
    user
  } = req;
  try {
    const phone = await Phone.findById(id);
    const newComment = await Comment.create({
      text: comment,
      creator: user.id,
      creatorName: user.name
    });
    phone.comments.push(newComment.id);
    phone.save();
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};

// Delete Comment

export const deleteComment = async (req, res) => {
  const {
    params: { phoneId, commentId }
  } = req;
  try {
    const phone = await Phone.findById(phoneId);
    const comment = await Comment.findById(commentId);
    if (String(comment.creator) !== req.user.id) {
      throw Error();
    } else {
      await Comment.findOneAndRemove({ _id: commentId });
      phone.comments.splice(phone.comments.indexof(commentId), 1);
      phone.save();
    }
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.phoneDetail(phoneId));
};

// Add My

export const addMy = async (req, res) => {
  const {
    params: { id },
    user
  } = req;
  try {
    const my = await User.findById(user.id);
    const phone = await Phone.findById(id);
    my.myphone = phone.id;
    console.log(my.myphone);
    my.save();
  } catch (error) {
    res.status(400);
  } finally {
    res.redirect(routes.me);
  }
};
