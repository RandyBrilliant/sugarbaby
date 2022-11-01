import * as yup from "yup";

export const TesterSchema = yup.object({
  first_name : yup.string().required('Please enter your First Name').max(255, 'You can have maximum characters of 255!'),
  last_name : yup.string().nullable().max(255, 'You can have maximum characters of 255!'),
  email: yup.string().email("Please enter appropriate format of email address").required('Please enter your email address').required('Please enter your email address').max(255, 'You can have maximum characters of 255!'),
  phone_number : yup.string().required('Please enter your Phone Number').max(15, 'You can have maximum characters of 15!'),
  address_line : yup.string().required("Please enter your Home Address"),
});
