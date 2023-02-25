/**
 * @jest-environment jsdom
 */

import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe("<Login />", () => {
    it("Login renders without any errors", () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.exists()).toEqual(true);
    });

    it("VVerify that the components renders 2 input tags", () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find("form input")).toHaveLength(3);
    });

    it("Verify that the components renders 2 label tags", () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find("form label")).toHaveLength(2);
    });

    it('verify that the submit button is disabled by default', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find({ type: 'submit' }).props().disabled).toBe(true);
    });
  
    it('verify that after changing the value of the two inputs, the button is enabled', () => {
      const wrapper = shallow(<Login />);
      wrapper.find({ id: 'email' }).simulate('change', { target: { name: 'email', value: 'thedudeabides@lebowski.com' } });
      wrapper.find({ id: 'password' }).simulate('change', { target: { name: 'password', value: 'markazeronextframedude' } });
      expect(wrapper.find({ type: 'submit' }).props().disabled).toBe(false);
    });
})