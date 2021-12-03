import { shallow } from 'enzyme';
import ComboBox from 'src/components/ui/combo-box';

describe('ComboBox', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<ComboBox debug />);

        expect(component).toMatchSnapshot();
    });

    it('should render loading correctly', () => {
        const component = shallow(<ComboBox isLoading={true} />);
        const loadingSpin = component.find('[data-test="combo-box-loading"]');

        expect(loadingSpin).toHaveLength(1);
    });

    it('should render error correctly', () => {
        const testError = 'test error';

        const component = shallow(<ComboBox error={testError} />);
        const errorContainer = component.find('[data-test="combo-box-error"]');

        expect(errorContainer).toHaveLength(1);
        expect(errorContainer.text()).toBe('test error');
    });

    it('should render drop-list by clicking on arrow icon', () => {
        const component = shallow(<ComboBox />);
        const arrowIcon = component.find('[data-test="combo-box-arrow-button"]');
        const dropList = component.find('[data-test="combo-box-drop-list"]');
        arrowIcon.simulate('click');
        expect(dropList).toHaveLength(1);
    });
});
