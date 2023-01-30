import Header from './Header';
import { shallow } from 'enzyme';


describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists());
  });
  it("Test n°2", () => {
    const wrapper = shallow(<Header />);
    wrapper.update();
    expect(wrapper.find("div.App-header")).toHaveLength(0);
  });
  it('components render img', () => {
    const img = render(<Header />);
    expect(getByText('logo')).toBeInTheDocument();
  });
  it('components render h1', () => {
    const img = render(<Header />);
    expect(getByText('School dashboard')).toBeInTheDocument(1)
  });
});
