import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  facebookId: Number,
  githubId: Number,
  myphone: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Phone"
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  compare: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Phone"
    }
  ]
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);

export default model;
