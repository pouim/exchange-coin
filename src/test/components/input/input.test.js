import { shallow } from 'enzyme';
import Input from 'src/components/ui/input';

describe('Input', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Input debug />);

        expect(component).toMatchSnapshot();
    });

    it('should render placeholder correctly', () => {
        const component = shallow(<Input placeholder="test" />);
        const placeholderContainer = component.find('[data-test="custom-input-placeholder"]');

        expect(placeholderContainer.text()).toBe('test');
    });

    it('should render error message correctly', () => {
        const testError = {
            message: 'test error message',
        };

        const component = shallow(<Input error={testError} />);
        const placeholderContainer = component.find('[data-test="custom-input-error"]');

        expect(placeholderContainer).toHaveLength(1);
        expect(placeholderContainer.text()).toBe('test error message');
    });
});
