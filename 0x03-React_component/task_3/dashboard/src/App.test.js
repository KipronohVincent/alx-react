import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Header from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import Notifications from './Notifications/Notifications';
import CourseList from './CourseList/CourseList'
  
describe('App', () => {
  it('renders properly', () => {
    shallow(<App />);
  });

  it('checking renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Login)).toHaveLength(1);
    expect(wrapper.find(Footer)).toHaveLength(1);
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });
})

describe('display when logged in', () => {
  it ('logged in true', () => {
    const wrapper = shallow(<App isLoggedIn="true" />);
    expect(wrapper.find(CourseList).exists()).toBeTruthy();
    expect(wrapper.find(Login).exists()).not.toBeTruthy();
  });
})

describe('testing App as a class component', () => {
  it('control+h test', () => {
    const alertMock = jest.fn();
  
    const spy = jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = mount(<App isLoggedIn="true" />);
    expect(spy).toHaveBeenCalled();
    const event = new KeyboardEvent('keydown', {
      key: 'control',
    });

    spy.mockReset();
    spy.mockRestore();
    jest.clearAllMocks()
  })
})
