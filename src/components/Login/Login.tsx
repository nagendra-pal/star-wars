import React, { useState } from "react";
import { Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { ErrorMessage, Field, Formik, Form, FormikProps } from "formik";
import {
  LoginBody,
  Container,
  TitleContainer,
  FormContainer,
  FieldContainer,
  StyledLabel,
  ErrorArea,
  StyledButton,
} from "../styles/Login";
import { InitialValuesMapper } from "./form/Mapper";
import { Validation } from "./form/Validation";
import { LoginType } from "./LoginTypes";
import {
  errorCaption,
  invalidCredentialsErrorCaption,
} from "../../config/constants";

export const InputComponent = ({ field, ...props }) => (
  <FieldContainer>
    {props.label && <StyledLabel>{props.label}</StyledLabel>}
    <Input {...field} {...props} />
    <ErrorArea>
      <ErrorMessage name={field.name} />
    </ErrorArea>
  </FieldContainer>
);

const Login = (): JSX.Element => {
  const [error, setError] = useState("");
  const routerHistory = useHistory();
  return (
    <LoginBody>
      <Container>
        <TitleContainer>
          <span>Login to:</span>
          <h1>Star Wars</h1>
        </TitleContainer>
        <Formik
          initialValues={InitialValuesMapper()}
          validationSchema={Validation}
          onSubmit={(values: LoginType, actions: any): void => {
            actions.setSubmitting(true);
            const searchURL = `https://swapi.dev/api/people/?search=${values.username}`;
            axios
              .get(searchURL)
              .then((res) => {
                if (
                  res.status === 200 &&
                  res.data.results &&
                  res.data.results.length
                ) {
                  const user = res.data.results[0];
                  if (user.birth_year === values.password) {
                    // Ideally we are saving JWT token but here we are using user info
                    localStorage.setItem("user", JSON.stringify(user));

                    routerHistory.push("/search");
                  } else {
                    actions.setSubmitting(false);
                    setError(invalidCredentialsErrorCaption);
                  }
                } else {
                  actions.setSubmitting(false);
                  setError(invalidCredentialsErrorCaption);
                }
              })
              .catch((error) => {
                if (axios.isCancel(error) || error) {
                  actions.setSubmitting(false);
                  setError(errorCaption);
                }
              });
          }}
          render={(formikProps: FormikProps<LoginType>): JSX.Element => {
            return (
              <FormContainer>
                {error && <ErrorArea>{error}</ErrorArea>}
                <Form>
                  <Field
                    label="User name*"
                    name="username"
                    type="text"
                    component={InputComponent}
                  />

                  <Field
                    label="Password*"
                    name="password"
                    type="password"
                    component={InputComponent}
                  />

                  <StyledButton
                    type="submit"
                    color="primary"
                    disabled={formikProps.isSubmitting || !formikProps.isValid}
                  >
                    Login
                  </StyledButton>
                </Form>
              </FormContainer>
            );
          }}
        />
      </Container>
    </LoginBody>
  );
};

export default Login;
