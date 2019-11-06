import routes from "../routes";
import Phone from "../models/Phone";

export const home = async (req, res) => {
  try {
    const phones = await Phone.find({});
    res.render("home", { pageTitle: "홈", phones });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "홈", phones: [] });
  }
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "검색", searchingBy, phones });
};

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
      apappearance: {
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

export const phoneDetail = (req, res) =>
  res.render("phoneDetail", { pageTitle: "휴대폰 정보" });

export const editPhone = (req, res) =>
  res.render("editPhone", { pageTitle: "휴대폰 정보 수정" });

export const deletePhone = (req, res) =>
  res.render("deletePhone", { pageTitle: "휴대폰 정보 삭제" });
