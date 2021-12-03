import { ChangeEvent, FC, ReactElement } from 'react';
import styles from './style.module.css';
import ExchangeBox from '../../components/ui/exchange-box';
import Button from 'src/components/ui/button';
import ConversionRateBox from 'src/components/ui/conversion-rate-box';
import { Wallet } from 'src/interfaces';

interface ExchangePageViewProps {
    onChangeFromCoin: (coin: Wallet) => void;
    onChangeToCoin: (coin: Wallet) => void;
    fromCoin: Wallet;
    toCoin: Wallet;
    conversationRate: number;
    fromValue: string;
    toValue: string;
    onFromValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onToValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ExchangePageView: FC<ExchangePageViewProps> = (props): ReactElement => {
    const {
        onChangeFromCoin,
        onChangeToCoin,
        fromCoin,
        toCoin,
        conversationRate,
        fromValue,
        toValue,
        onFromValueChange,
        onToValueChange,
    } = props;

    return (
        <>
            <div className={styles.container}>
                <span className="text-xl">Exchange Now!</span>
                <div className="bg-c-secondary-900  w-full lg:p-5 p-3 rounded-lg my-10">
                    <ExchangeBox
                        selectedCoin={fromCoin}
                        handleCoinChange={onChangeFromCoin}
                        value={fromValue}
                        onValueChange={onFromValueChange}
                    />
                    <hr className="border-gray-600 my-2" />
                    <ExchangeBox
                        selectedCoin={toCoin}
                        handleCoinChange={onChangeToCoin}
                        value={toValue}
                        onValueChange={onToValueChange}
                    />

                    <ConversionRateBox
                        fromCoin={fromCoin}
                        toCoin={toCoin}
                        conversationRate={conversationRate}
                    />
                </div>

                <Button classBtn="p-2 w-full lg:w-28 mx-1 text-sm font-bold">Exchange</Button>
            </div>
        </>
    );
};

export default ExchangePageView;
