import App from './App';
import { shallow } from 'enzyme';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists());
  });
  it('Notifications component', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists());
  });
  it('Header component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists());
  });
  it('Login component', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists());
  });
  it('Footer component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists());
  });
});
