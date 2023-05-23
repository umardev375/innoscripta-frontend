import * as yup from "yup";

export const createMemevalidation = yup.object().shape({
  title: yup.string().required("Title is required"),
  // .matches(/^[A-Za-z ]+$/i, "Invalid Name"),
  description: yup.string().required("description is required"),
  price: yup.number().required("Price is required"),
  display: yup.string().required("Display as is required"),
});

export const sellMemePriceValidation = (currentPrice: any, highestBid: any, auction:boolean) =>
  yup.object().shape({
    price: yup
      .number()
      .required("Price is required")
      .moreThan(currentPrice, `${auction === true ? 'Bid' : "Selling price"} should be greater than current price.`)
      .moreThan(highestBid ? highestBid : currentPrice , "Bid should be greater than highest or current bid price."),
});
