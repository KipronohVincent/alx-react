import React from 'react';
import CourseList from './CourseList';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';


const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
];

describe('Check that it renders CourseList component', () => {
    it('check CourseList component', () => {
        const wrapper = shallow(<CourseList/>);
        expect(wrapper.exists());
    });
    it('check that it renders the 5 different rows', () => {
        const wrapper = shallow(<CourseList />);
        const row = wrapper.find('CourseListRow')
        expect(row.length).toEqual(2)
    });
});

describe('empty array', () => {
    it('empty array', () => {
      const wrapper = shallow(<CourseList />);
      const Course = wrapper.find('td');
      expect(Course.length).toEqual(1);
      expect(Course.text()).toEqual('No course available yet');
  });
});