import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection tests', () => {
    it('renders properly', () => {
        shallow(<BodySection />);
    });
    it ('Correct rendering', () => {
       const children = <p>children of section</p>
       const wrapper = shallow(<BodySection title='example' children={children} />);

       const title = wrapper.find('h2');
       expect(title.text()).toEqual('example');
       expect(wrapper.prop('children')[1]).toEqual(children);
    })
})
