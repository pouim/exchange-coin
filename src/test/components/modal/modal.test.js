import { shallow } from 'enzyme';
import Modal from 'src/components/ui/modal';

describe('Modal', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Modal debug />);

        expect(component).toMatchSnapshot();
    });

    it('should render container and two buttons', () => {
        const component = shallow(<Modal visible={true} />);
        const cancelButton = component.find('[data-test="modal-cancel"]');
        const confirmButton = component.find('[data-test="modal-confirm"]');
        const containerButton = component.find('[data-test="modal-container"]');

        expect(cancelButton).toHaveLength(1);
        expect(confirmButton).toHaveLength(1);
        expect(containerButton).toHaveLength(1);
    });
});
