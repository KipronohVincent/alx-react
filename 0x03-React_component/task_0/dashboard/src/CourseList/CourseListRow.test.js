import React from 'react';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';

describe('CourseListRow', () => {
    it('isHeader is true', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test'/>);
        const th = wrapper.find('th');
        expect(th.length).toBe(1);
        expect(th.props().colSpan).toEqual('2');
    });
    it('isHeader is true', () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test' textSecondCell='test'/>);
      const th = wrapper.find('th');
      expect(th.length).toBe(2);
    });
    it('isHeader is false', () => {
      const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='test'/>);
      const td = wrapper.find('td');
      expect(td.length).toBe(2);
    });
});

