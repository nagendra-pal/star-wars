import { LoginType } from "../LoginTypes";

export const InitialValuesMapper = (): LoginType => ({
  username: "",
  password: "",
});

export const SubmitMapper = (values: LoginType): LoginType => ({
  username: values.username,
  password: values.password,
});
