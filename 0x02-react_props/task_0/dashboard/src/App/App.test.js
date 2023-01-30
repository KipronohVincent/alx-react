import App from './App';
import { shallow } from 'enzyme';
import logo from '../assets/holberton-logo.jpg';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists());
  });
});
