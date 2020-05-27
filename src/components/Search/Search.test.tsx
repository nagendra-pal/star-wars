import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Search from './Search';

describe('Search component', () => {
   it('should renders without crashing', () => {
      const output = shallow(<Search />);
      expect(shallowToJson(output)).toMatchSnapshot();
    });
});

