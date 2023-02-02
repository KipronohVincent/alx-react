import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

it('renders properly', () => {
  shallow(<Login />);
});

it('checking renders', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find('input')).toHaveLength(2);
  expect(wrapper.find('label')).toHaveLength(2);
});
