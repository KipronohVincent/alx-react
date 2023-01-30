import App from './App';
import { shallow } from 'enzyme';
import logo from '../assets/holberton-logo.jpg';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists());
  });
  it("Test n°2", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("div.App-header")).toHaveLength(0);
  });
  it("Test n°3", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("div.App-body")).toHaveLength(1);
  });
  it("Test n°4", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("div.App-footer")).toHaveLength(0);
  });
});
