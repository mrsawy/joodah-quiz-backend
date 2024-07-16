const yup = require("yup");
const axios = require("axios");

const User = require(`./../models/User`);
const { validationSchema } = require(`./../validation/index`);

module.exports = {
  check: async (req, res) => {
    let { email, phone, category } = req.body;
    // console.log({ email, phone, category });
    // let _user = await User.findOne({ $or: [{ email }, { phone }] });
    // if (_user) {
    //   console.log(_user.result.levelId);
    // }
    let user = await User.findOne({
      $and: [{ $or: [{ email }, { phone }] }, { "result.levelId": category }],
    });
    if (user) {
      return res.status(403).json({ error: "User with the same email or phone already exists" });
    } else {
      res.status(200).json(1);
    }
  },
  deleteUser: async (req, res) => {
    const { userId } = req.body;
    // console.log(req.body, userId, `<==userId`);
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      console.log(`no user founded`);
      return res.status(404).json({ message: "User not found" });
    }
    console.log(deletedUser);
    let users = await User.find();
    res.json(users);
  },
  createUser: async (req, res) => {
    try {
      let { userFormData } = req.body;
      console.log({ userFormData });

      let { email, age, phone, name, experience, education, capatcha } = userFormData;

      let valid = validationSchema.validateSync({
        email,
        age,
        phone,
        name,
        experience,
        education,
        capatcha,
      });
      let response = await axios.get(
        `https://recaptcha.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${capatcha}`
      );

      if (!response.data.success) {
        throw new Error(`capatcha is not valid`);
      }

      let existingUser = await User.findOne({ $or: [{ email }, { phone }] });
      if (existingUser) {
        return res.status(403).json({ error: "User with the same email or phone already exists" });
      }
      // ______________________________________________
      let user = await User.create(userFormData);
      // __________________________________________________

      return res.status(200).json({
        user: {
          name: user?.name,
          email: user?.email,
          phone: user?.phone,
          age: user?.age,
          experience: user?.experience,
          education: user?.education,
          nationality: user?.nationality,
          gender: user?.gender,
          academicSpecialization: user?.academicSpecialization,
          countryOfResidence: user?.countryOfResidence,
          relatedExperience: user?.relatedExperience,
        },
      });
    } catch (e) {
      console.log(e);
      if (Array.isArray(e?.errors) && e?.errors?.length > 0) {
        return res.status(400).json({ errors: e?.errors });
      } else {
        return res.status(400).json({ error: e, massage: `Error while Creating the user` });
      }
    }
  },
  getAllUsers: async (req, res) => {
    let users = await User.find().sort({ createdAt: -1 });
    console.log(users);
    res.json(users);
  },
  getOneUser: async (req, res) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ messag: "Level not found" });
    }
    res.json(user);
  },
};
