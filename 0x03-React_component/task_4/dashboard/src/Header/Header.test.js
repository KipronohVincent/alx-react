import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('renders properly', () => {
  shallow(<Header />);
});

it('checking renders', () => {
  const wrapper = shallow(<Header />);

  const img = wrapper.find('img');
  const h1 = wrapper.find('h1');

  expect(img.exists()).toBe(true);
  expect(h1.exists()).toBe(true);
});
