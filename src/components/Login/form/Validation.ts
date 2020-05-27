import * as yup from "yup";
import { invalidPassword } from "../../../config/constants";

export const Validation = yup.object({
  username: yup.string().required(),
  password: yup.string().required().min(4, invalidPassword),
});
