import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import PlanetListItem from "./PlanetListItem";
import SearchData from "../../SearchData";


describe("Planet List Item component", () => {
  it("should renders without crashing", () => {
    const output = shallow(<PlanetListItem planet={SearchData[0]} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
