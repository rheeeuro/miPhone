import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
  name: String,
  imageUrl: {
    type: String,
    required: "Image URL is required"
  },
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
