import { shallow } from 'enzyme';
import Button from 'src/components/ui/button';
import { findByTestAttr } from 'src/test/testUtils';

describe('Button', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Button debug />);

        expect(component).toMatchSnapshot();
    });

    it('should render correctly with no props', () => {
        const component = shallow(<Button />);

        expect(component).toMatchSnapshot();
    });

    it('should render children correctly', () => {
        const testTitle = 'test';
        const component = shallow(<Button>{testTitle}</Button>);

        const element = findByTestAttr(component, 'custom-button');

        expect(element.text()).toBe('test');
    });

    it('should not render loading when it is false', () => {
        const component = shallow(<Button loading={false} />);
        const loadingSpin = component.find('[data-test="custom-button-loading"]');

        expect(loadingSpin).toHaveLength(0);
    });

    it('should not render loading when it is true', () => {
        const component = shallow(<Button loading={true} />);
        const loadingSpin = component.find('[data-test="custom-button-loading"]');

        expect(loadingSpin).toHaveLength(1);
    });
});
