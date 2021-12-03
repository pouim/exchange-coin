import { shallow } from 'enzyme';
import ConversionRateBox from 'src/components/ui/conversion-rate-box';

describe('ConversionRateBox', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<ConversionRateBox debug />);

        expect(component).toMatchSnapshot();
    });

    it('should render data correctly', () => {
        const testData = {
            fromCoin: {
                id: 'USD',
                title: 'USD',
                balance: 200,
                sign: '$',
            },
            toCoin: {
                id: 'EUR',
                title: 'EUR',
                balance: 150,
                sign: '€',
            },
            conversionRate: 1.17,
        };

        const component = shallow(
            <ConversionRateBox
                fromCoin={testData.fromCoin}
                toCoin={testData.toCoin}
                conversionRate={testData.conversionRate}
            />,
        );
        const rateBoxContainer = component.find('[data-test="rate-box-container"]');

        expect(rateBoxContainer.text()).toContain(testData.fromCoin.sign);
        expect(rateBoxContainer.text()).toContain(testData.toCoin.sign);
        expect(rateBoxContainer.text()).toContain(testData.conversionRate);
    });
});
