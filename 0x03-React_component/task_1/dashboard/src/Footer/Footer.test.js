import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

it('renders properly', () => {
  shallow(<Footer />);
});

it('checking renders', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.text()).toContain('Copyright');
});
