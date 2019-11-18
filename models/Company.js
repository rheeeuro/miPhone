import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
  name: String,
  homepage: String,
  phones: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Phone"
    }
  ]
});

const model = mongoose.model("Company", CompanySchema);

export default model;
