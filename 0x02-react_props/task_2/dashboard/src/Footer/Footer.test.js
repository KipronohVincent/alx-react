import Footer from './Footer';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists());
  });
  it("Test n°4", () => {
    const wrapper = shallow(<Footer />);
    wrapper.update();
    expect(wrapper.find("div.App-footer")).toHaveLength(0);
  });
  it("Test n°4", () => {
    const wrapper = render(<Footer />);
    expect(getByText("Copyright")).toHaveLength(0);
  });
});
