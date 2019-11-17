import mongoose from "mongoose";
import routes from "../routes";
import Phone from "../models/Phone";
import User from "../models/User";

// Home

export const home = async (req, res) => {
  try {
    const phones = await Phone.find({}).sort({ _id: -1 });
    res.render("home", { pageTitle: "홈", phones });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "홈", phones: [] });
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
  } catch (error) {
    console.log(error);
  }
  res.render("search", { pageTitle: "검색", searchingBy, phones });
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
  res.redirect(routes.phoneDetail(newPhone.id));
};

// Phone Detail

export const phoneDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const phone = await Phone.findById(id);
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
    const user = await User.findById(req.user).populate("compare");
    user.compare.splice(user.compare.indexof(id), 1);
    user.save();
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.compare);
};
