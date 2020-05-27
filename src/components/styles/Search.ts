
import styled from "styled-components";

export const Body = styled.div`
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  border-bottom: 0.0625rem solid #e8e8e8;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;


export const Title = styled.div`
  font-size: 2rem;
  
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.875rem 2rem;
  margin: 0 -1.875rem 1.3125rem;
  border-bottom: 0.0625rem solid #e8e8e8;
  @media only screen and (min-width: 768px) {
    padding: 1.5rem 0 2rem;
    margin: 0 0 1.3125rem;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  font-size: 1.5rem;
  border-bottom: 0.0625rem solid #e8e8e8;
`;

export const PlanetContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Planet = styled.div`
  border: 0.0625rem solid #e8e8e8;
  border-radius: 6px;
  margin: 1rem;
  width: ${props=>props.diameter}px;
  height: ${props=>props.diameter}px;
  cursor: pointer;
`;

export const PlanetHeader = styled.div`
  padding: 4%;
  border-bottom: 0.0625rem solid #e8e8e8;
  height: 30%;
  font-size: ${props=>props.fontSize}px;
`;

export const PlanetBody = styled.div`
  padding: 4%;
  font-size: ${props=>props.fontSize}px;
  font-style: italic;
`;

export const StyledMesage = styled.div`
  color: red;
`;