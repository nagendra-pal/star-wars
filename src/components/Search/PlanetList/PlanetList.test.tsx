import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import PlanetList from "./PlanetList";
import SearchData from "../SearchData";

describe("Planet List component", () => {
  it("should renders without crashing", () => {
    const output = shallow(<PlanetList planetList={SearchData} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
