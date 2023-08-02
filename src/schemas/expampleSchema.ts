import { boolean, z } from "zod";

export const exampleSchema = z.object({
  // services: z.string().min(1, { message: "Please Select s Service" }),
  // email: z.string().email({ message: "Please Input correct Email" }),
  
  
  
  
  //-------------Input-------------
  name: z
  .string()
  .min(3, { message: "Name should atleast be 3 Characters" })
  .max(30, { message: "Name can only be maximum of 30 Characters" }),
  //-------------Phone-------------
  phone: z.string().min(10, { message: "Please Enter Phone Number" }),
  //-------------Combobox-------------
  language: z.string({
    required_error: "Please select a language.",
  }),
  //-------------CustomCheckbox-------------
  termsandservice: z.literal<boolean>(true), //Must be True
  //-------------CustomCheckboxGroup-------------
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});
