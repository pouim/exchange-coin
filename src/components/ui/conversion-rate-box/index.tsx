import { FC, ReactElement } from 'react';
import { Wallet } from 'src/interfaces';

interface ConversionRateBoxProps {
    fromCoin: Wallet;
    toCoin: Wallet;
    conversationRate: number;
}

const ConversionRateBox: FC<ConversionRateBoxProps> = (props): ReactElement => {
    const { fromCoin, toCoin, conversationRate } = props;

    return (
        <div className="text-center mt-10 px-4 py-2 bg-lighten-5 w-auto mx-auto rounded-3xl">
            {' '}
            1 {fromCoin?.sign} = {conversationRate} {toCoin.sign}
        </div>
    );
};

export default ConversionRateBox;
