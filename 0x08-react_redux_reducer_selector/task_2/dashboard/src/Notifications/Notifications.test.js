import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications'
import NotificationItem from './NotificationItem';
import { getLatestNotification } from "../utils/utils";
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

const htmlObj = {
  __html: getLatestNotification(),
};
const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: htmlObj},
];

describe('<Notifications />', () => {
  it('renders an <Notifications /> component', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toHaveLength(1);
	});

  it('render a Notifications component and check for 3 items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
	});

  it('render a Notifications component and verify text', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find('.Notifications p')).toHaveLength(1);
    expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications')
	});

  it('render a Notifications component and verify html', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem).first().html()).toContain('New course available')
	});

  it('ensure .menuItem is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
	});

  it('ensure div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications')).toHaveLength(0);
	});

  it('ensure .menuItem is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
	});

  it('ensure div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
	});

  it('verify that Notifications render correctly', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
    const wrapperTwo = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapperTwo.find('.Notifications')).toHaveLength(1);
	});

  it('verify that when you pass a list of notifications, the component render it correctly', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
	});

  it('verify that clicking on the menu item calls handleDisplayDrawer', () => {
    const mockHandleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications listNotifications={listNotifications} handleDisplayDrawer={mockHandleDisplayDrawer} />);
    const spy = jest.spyOn(wrapper.instance().props, 'handleDisplayDrawer');
    wrapper.find('.menuItem div').simulate('click');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
	});

  it('verify that clicking on the button calls handleHideDrawer', () => {
    const mockHandleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} handleHideDrawer={mockHandleHideDrawer}/>);
    const spy = jest.spyOn(wrapper.instance().props, 'handleHideDrawer');
    wrapper.find('.Notifications button').simulate('click');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
	});
});