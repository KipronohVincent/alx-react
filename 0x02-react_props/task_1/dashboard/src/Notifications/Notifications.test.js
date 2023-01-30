import Notifications from './Notifications';
import { shallow } from 'enzyme';

describe('Notifications', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<Notifications />);
      expect(wrapper.exists());
    });
    it("Test n°2", () => {
      const wrapper = shallow(<Notifications />);
      wrapper.update();
      expect(wrapper.find("li")).toHaveLength(3);
    });
    it("Test n°3", () => {
      const wrapper = shallow(<Notifications />);
      wrapper.update();
      expect(wrapper.find("p").text()).toEqual('Here is the list of notifications');
    });
  });