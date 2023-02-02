import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom tests', () => {
    it('renders properly', () => {
        shallow(<BodySectionWithMarginBottom />);
    });
    it ('check content of component and rendering', () => {
        const children = <p>children of section</p>;
        const wrapper = shallow(<BodySectionWithMarginBottom title='test' children={children}/>);
        const section = wrapper.find(BodySection);
        expect(section.exists()).toBeTruthy();
        expect(section.prop('title')).toEqual('test');
        expect(section.prop('children')).toEqual(children); 
    })
})
