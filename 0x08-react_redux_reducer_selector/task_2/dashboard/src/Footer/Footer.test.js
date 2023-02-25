/**
 * @jest-environment jsdom
*/

import React from "react";
import { shallow, mount } from "enzyme";
import Footer from "./Footer";
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext } from '../App/AppContext';


StyleSheetTestUtils.suppressStyleInjection();

describe('<Footer />', () => {
  it('render a Footer component without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toHaveLength(1);
	});

  // it("Verify that the components renders the text  Copyright", () => {
  //   const wrapper = shallow(<Footer />);
  //   expect(wrapper.find(".footer p")).toHaveLength(1);
  //   expect(wrapper.find(".footer p").text()).toContain("Copyright");
  // });

  it('verify that the link is not displayed when the user is logged out within the context', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find('footer p').length).toBe(1);
	});

  it('verify that the link is displayed when the user is logged in within the context', () => {
    const value = { user: { email: 'thedude@aim.com', password: 'thedudeabides', isLoggedIn: true }, logOut: () => { } }
    const wrapper = mount(<AppContext.Provider value={value}><Footer /></AppContext.Provider>);
    expect(wrapper.find('footer a').text()).toContain('Contact us');
	});
});