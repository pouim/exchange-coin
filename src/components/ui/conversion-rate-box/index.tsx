import { FC, ReactElement } from 'react';
import { Wallet } from 'src/interfaces';

interface ConversionRateBoxProps {
    fromCoin: Wallet;
    toCoin: Wallet;
    conversionRate: number;
}

const ConversionRateBox: FC<ConversionRateBoxProps> = (props): ReactElement => {
    const { fromCoin, toCoin, conversionRate } = props;

    return (
        <div
            className="text-center mt-10 px-4 py-2 bg-lighten-5 w-auto mx-auto rounded-3xl"
            data-test="rate-box-container"
        >
            {' '}
            {fromCoin?.sign} 1 = {toCoin.sign} {conversionRate}
        </div>
    );
};

export default ConversionRateBox;
