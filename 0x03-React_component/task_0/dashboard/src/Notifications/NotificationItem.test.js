import NotificationItem from "./NotificationItem";
import { shallow } from 'enzyme';
import React from 'react';

describe('NotificationItem', () => {
    it('Basic renderin of the component', () => {
      const wrapper = shallow(<NotificationItem />);
      expect(wrapper.exists());
    });
    it("Verify type and value", () => {
      const wrapper = shallow(<NotificationItem type='default' value='test'/>);
      expect(wrapper.containsMatchingElement(<li data-priority='default'>test</li>)).toEqual(true);
    });
    it('Verify html', () => {
      const wrapper = shallow(<NotificationItem html={{__html: '<u>test</u>'}}/>);
      expect(wrapper.html()).toEqual('<li data-priority=\"default\"><u>test</u></li>');
    });
  });