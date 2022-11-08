import * as yup from "yup";

yup.addMethod(yup.object, "optional", function(
    isOptional = true,
    defaultValue = undefined
  ) {
    return this.transform(function(value) {
      // If false is passed, skip the transform
      if (!isOptional) return value;

      // If any child property has a value, skip the transform
      if (
        value &&
        Object.values(value).some(v => !(v === null || v === undefined || v === ""))
      ) {
        return value;
      }

      return defaultValue;
    })
    // Remember, since we're dealing with the `object` 
    // type, we have to change the default value
    .default(defaultValue);
  });

export const TesterSchema = yup.object({
  first_name : yup.string().required('Please enter your First Name').max(255, 'You can have maximum characters of 255!'),
  last_name : yup.string().nullable().max(255, 'You can have maximum characters of 255!'),
  email: yup.string().email("Please enter appropriate format of email address").required('Please enter your email address').required('Please enter your email address').max(255, 'You can have maximum characters of 255!'),
  phone_number : yup.string().required('Please enter your Phone Number').max(15, 'You can have maximum characters of 15!'),
  type : yup.string().required("Please choose the flavour!"),
  flavours: yup.array().max(2, 'You can only select up to 2 flavours!').optional(),
  address_line : yup.string().required("Please enter your Home Address"),
});

