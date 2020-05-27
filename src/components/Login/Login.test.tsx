import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Login from './Login';

describe('Login component', () => {
   it('should renders without crashing', () => {
      const output = shallow(<Login />);
      expect(shallowToJson(output)).toMatchSnapshot();
    });
});

