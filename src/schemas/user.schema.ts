import * as yup from "yup";

export const validateSignupForm = yup.object().shape({
  name: yup.string().required("Name is required"),
  // .matches(/^[A-Za-z ]+$/i, "Invalid Name"),
  // lastName: yup.string().required("Last Name is required"),
  // .matches(/^[A-Za-z ]+$/i, "Invalid Name"),
  email: yup
    .string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email address"
    ),
  password: yup.string().required("password is required"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const validateloginForm = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email address"
    ),
  password: yup.string().required("password is required"),
});

export const validateForgetpasswordForm = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email address"
    ),
});

export const validateResetpasswordForm = yup.object().shape({
  code: yup
    .number()
    .typeError("Verification Code")
    .required()
    .label("Verification Code"),
  password: yup.string().required().min(8).label("Password"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const validateCreatorForm = yup.object().shape({
  website: yup.string().required("Website is required"),
  // bio: yup.string().required("First Name is required"),
  // // .matches(/^[A-Za-z ]+$/i, "Invalid Name"),
  // lastName: yup.string().required("Last Name is required"),
  // // .matches(/^[A-Za-z ]+$/i, "Invalid Name"),
  // email: yup
  //   .string()
  //   .matches(
  //     /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  //     "Invalid website address"
  //   ),
  // password: yup.string().required("password is required"),
  // // phone: yup.number().required("Number is required"),
  // countryCode:yup.string()
});
