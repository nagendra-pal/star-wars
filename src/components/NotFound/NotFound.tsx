import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';


const CenteredRow = styled(Row)`
  justify-content: center;
`;

const ErrorCode = styled.p`
  font-size: 6.25rem;
  color: '#696969';
  line-height: normal;
  margin: 2.5rem 0 0.625rem 0;
`;

const Description = styled.p`
  font-size: 1.25rem;
  font-weight: 200;
  text-align: center;
  color: '#3A3A3A';
  line-height: normal;
  margin: 0 0 1.25rem 0;
`;

const HomePageLink = styled(Link)`
  font-size: 1.15rem;
  font-weight: 500;
  color: '#2C9EDE';
`;



const NotFound: FunctionComponent = (): JSX.Element => {
  return (
    <Container fluid>
      <CenteredRow>
        <ErrorCode>404</ErrorCode>
      </CenteredRow>
      <CenteredRow>
        <Description>The page you requested could not be found.</Description>
      </CenteredRow>
      <CenteredRow>
        <HomePageLink to="/">Go to login page</HomePageLink>
      </CenteredRow>
    </Container>
  )
};

export default NotFound;
