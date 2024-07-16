const yup = require("yup");

module.exports.validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .required("Phone is required")
    .min(12, "Phone must be at least 11 numbers")
    .max(14, "Phone cannot exceed 13 number"),
  name: yup.string().max(20, "name cannot exceed 20 character").required("Name is required"),
  age: yup.number().max(80, "age cannot exceed 80").required("age is required"),
  experience: yup
    .string()
    .max(5, "experience cannot exceed 5 character")
    .required("experience is required"),
  education: yup
    .string()
    .max(60, "education cannot exceed 60 character")
    .required("education is required"),
  capatcha: yup.string().required("capatcha is required"),
});
