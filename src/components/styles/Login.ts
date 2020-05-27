import styled from "styled-components";
import { Button } from "reactstrap";

export const LoginBody = styled.div`
  margin: 80px auto;
  text-align: center;
`;

export const Container = styled.div`
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 0 auto 30px;
  padding: 30px;
  position: relative;
  text-align: left;
  vertical-align: top;
  width: 80%;
  @media only screen and (min-width: 768px) {
    width: 40%;
  }
`;

export const TitleContainer = styled.div`
  font-size: 1.5rem;
  border-bottom: 0.0625rem solid #e8e8e8;
  text-align: center;
`;

export const FormContainer = styled.div`
  padding: 1rem;
`;

export const FieldContainer = styled.div`
  padding-bottom: 1rem;
`;

export const StyledLabel = styled.div`
  font-weight: 600;
  font-size: 0.875rem;
`;

export const ErrorArea = styled.div`
  color: red;
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;
