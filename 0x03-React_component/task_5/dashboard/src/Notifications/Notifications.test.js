import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications', () => {
  it('renders properly', () => {
    shallow(<Notifications />);
  });

  it('checking render', () => {
    const wrapper = shallow(<Notifications />);
    const li = wrapper.find('div');
    expect(wrapper.text()).toContain('Your notifications');
});
});

describe('display drawer', () => {
  it('display drawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer='true'/>);
    expect(wrapper.find('div.menuItems').exists()).toBeTruthy();
    expect(wrapper.find('div.Notifications').exists()).toBeTruthy();
  });
});

describe('test markAsRead method', () => {
  it('test console log', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    const notif = new Notifications();
    notif.markAsRead(1);
    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
  });
});
