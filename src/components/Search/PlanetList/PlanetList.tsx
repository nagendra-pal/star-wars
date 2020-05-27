import React from "react";
import { PlanetContainer } from "../../styles/Search";
import PlanetListtItem from "./PlanetListItem";
import { PlanetType, PlanetListType } from "../SearchTypes";

const PlanetList = ({ planetList }: PlanetListType): JSX.Element => (
  <PlanetContainer>
    {planetList &&
      planetList.length > 0 &&
      planetList.map((planet: PlanetType, index) => (
        <PlanetListtItem key={`planet-${index}`} planet={planet} />
      ))}
  </PlanetContainer>
);

export default PlanetList;
