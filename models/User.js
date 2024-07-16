const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      //   unique: true, // Assuming email should be unique
    },
    phone: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      // defaultValue: "N/A",
    },
    experience: {
      type: String,
      required: true,
      // defaultValue: "N/A",
    },
    education: {
      type: String,
      required: true,
      // defaultValue: "N/A",
    },
    fullTime: {
      type: Number,
      required: false,
    },
    result: {
      grade: Number,
      fullGrade: Number,
      levelId: { type: mongoose.Types.ObjectId },
      levelName: String,
      timeTaken: Number,
      totalQuestions: Number,
      correctAnswers: Number,
      // questionsAndAnswers: [],
      fullTime: {
        type: Number,
        required: false,
      },
    },
    allowTestAgain: {
      type: Number,
      defaultValue: 0,
    },
    nationality: String,
    gender: { type: mongoose.Schema.Types.Mixed },
    academicSpecialization: String,
    countryOfResidence: String,
    relatedExperience: Number,
    // questionsAndAnswers: [],
    // totalQuestions: Number,
    // correctAnswers: Number,
    // timeTaken: Number,
    // levelId: { type: mongoose.Types.ObjectId },
    // levelName: String,
    // fullTime: {
    //   type: Number,
    //   required: false,
    // },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt timestamps
    collection: "users", // Specify the desired collection name
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
