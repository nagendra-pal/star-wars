import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import NotFound from './NotFound';

describe('NotFound component', () => {
   it('should renders without crashing', () => {
      const output = shallow(<NotFound />);
      expect(shallowToJson(output)).toMatchSnapshot();
    });
});

