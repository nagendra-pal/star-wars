import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import moment from "moment";
import { PlanetListItemType } from "../../SearchTypes";
import { Planet, PlanetHeader, PlanetBody } from "../../../styles/Search";

const PlanetListItem = ({ planet }: PlanetListItemType): JSX.Element => {
  const [modal, setModal] = useState<boolean>(false);
  const toggle = () => setModal(!modal);

  // Calculate div/font size based on diameter not population.
  const divSize = Number(Number(planet.diameter) / 70).toFixed(1);
  const headfontSize = Number(Number(divSize) / 6).toFixed(1);
  const bodyfontSize = Number(Number(headfontSize) - 8).toFixed(1);
  return (
    <div>
      <Planet diameter={divSize} onClick={toggle}>
        <PlanetHeader fontSize={headfontSize}>
          <b>{planet.name}</b>
        </PlanetHeader>

        <PlanetBody fontSize={bodyfontSize}>
          Population
          <div>{planet.population}</div>
        </PlanetBody>
      </Planet>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{planet.name}</ModalHeader>
        <ModalBody>
          <ul>
            <li>Diamter: {planet.diameter}</li>
            <li>Rotation period: {planet.rotation_period}</li>
            <li>Orbital period: {planet.orbital_period}</li>
            <li>Climate: {planet.climate}</li>
            <li>Terrain: {planet.terrain}</li>
            <li>Population: {planet.population}</li>
            <li>Residents: {planet.residents.length}</li>
            <li>Films: {planet.films.length}</li>
          </ul>
          <i>Created on: {moment.utc(planet.created).format("MMM DD, YYYY")}</i>
          <br />
          <i>
            Last updated on: {moment.utc(planet.edited).format("MMM DD, YYYY")}
          </i>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PlanetListItem;
