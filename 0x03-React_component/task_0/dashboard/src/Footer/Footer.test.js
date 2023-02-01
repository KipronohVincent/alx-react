import Footer from './Footer';
import { shallow } from 'enzyme';
import React from 'react';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists());
  });
  it("Test text Copyright", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text().substring(0, 9)).toBe('Copyright');
  });
});
