import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import App from './App';

describe('App component', () => {
   it('should renders without crashing', () => {
      const output = shallow(<App />);
      expect(shallowToJson(output)).toMatchSnapshot();
    });
});