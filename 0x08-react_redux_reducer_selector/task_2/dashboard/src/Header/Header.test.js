/**
 * @jest-environment jsdom
 */

import React from "react";
import { shallow, mount } from "enzyme";
import Header from "./Header";
import { AppContext } from '../App/AppContext';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe("<Header />", () => {
  it('renders a <Header /> component', () => {
    const wrapper = shallow(<AppContext.Provider><Header /></AppContext.Provider>);
    expect(wrapper).toHaveLength(1);
	});

  it('mounts a <Header /> component and checks contents', () => {
    const value = { user: {email: '', password: '', isLoggedIn: false}, logOut: () => {} }
    const wrapper = mount(<AppContext.Provider value={value}><Header /></AppContext.Provider>);
    expect(wrapper.find('header h1')).toHaveLength(1);
    expect(wrapper.find('header img')).toHaveLength(1);
	});

  it('mounts a <Header /> component with default context and verifies that logoutSection is not created', () => {
    const value = { user: { email: '', password: '', isLoggedIn: false }, logOut: () => {} }
    const wrapper = mount(<AppContext.Provider value={value}><Header /></AppContext.Provider>);
    expect(wrapper.find('#logoutSection')).toHaveLength(0);
	});

  it('mounts a <Header /> component with user defined and verifies that logoutSection is created', () => {
    const value = { user: { email: 'thedude@aim.com', password: 'thedudeabides', isLoggedIn: true }, logOut: () => {} }
    const wrapper = mount(<AppContext.Provider value={value}><Header /></AppContext.Provider>);
    expect(wrapper.find('#logoutSection')).toHaveLength(1);
	});

  it('mounts a <Header /> component with user defined and verifies that clicking logout link calls logOut()', () => {
    const value = { user: { email: 'thedude@aim.com', password: 'thedudeabides', isLoggedIn: true }, logOut: () => { } }
    const spy = jest.spyOn(value, 'logOut');
    const wrapper = mount(<AppContext.Provider value={value}><Header /></AppContext.Provider>);
    wrapper.find('#logoutSection span').simulate('click');
    expect(spy).toHaveBeenCalled();
	});
})