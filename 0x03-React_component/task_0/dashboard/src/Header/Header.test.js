import Header from './Header';
import { shallow } from 'enzyme';
import React from 'react';
import {render} from '@testing-library/react';


describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists());
  });
  it('components render img', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("img").exists()).toEqual(true);
  });
  it('components render h1', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').exists()).toEqual(true)
  });
});
