import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import NotificationItems from './NotificationItem';

describe('Notification item tests', () => {
  it('test notification item on click', () => {
    const onclick = jest.fn();
    
    const wrapper = shallow(<NotificationItems markAsRead={onclick} id='1' />);
    wrapper.find('li').first().simulate('click');
    expect(onclick).toBeCalled();
  })
})
