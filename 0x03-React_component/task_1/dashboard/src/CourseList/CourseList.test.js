import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
  
it('renders properly', () => {
  shallow(<CourseList />);
});

it('checking renders', () => {
  const wrapper = shallow(<CourseList />);
  expect(wrapper.find(CourseListRow)).toHaveLength(5);
});
