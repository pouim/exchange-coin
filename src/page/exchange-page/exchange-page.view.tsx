import { ChangeEvent, FC, ReactElement } from 'react';
import styles from './style.module.css';
import ExchangeBox from '../../components/ui/exchange-box';
import Button from 'src/components/ui/button';
import ConversionRateBox from 'src/components/ui/conversion-rate-box';
import { InputValueData, Wallet } from 'src/interfaces';

interface ExchangePageViewProps {
    userWallet: Wallet[];
    onChangeFromCoin: (coin: Wallet) => void;
    onChangeToCoin: (coin: Wallet) => void;
    fromCoin: Wallet;
    toCoin: Wallet;
    conversationRate: number;
    fromValueData: InputValueData;
    toValueData: InputValueData;
    onFromValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onToValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleExchange: () => void;
    isLoading: boolean;
}

const ExchangePageView: FC<ExchangePageViewProps> = (props): ReactElement => {
    const {
        userWallet,
        onChangeFromCoin,
        onChangeToCoin,
        fromCoin,
        toCoin,
        conversationRate,
        fromValueData,
        toValueData,
        onFromValueChange,
        onToValueChange,
        handleExchange,
        isLoading,
    } = props;

    return (
        <>
            <div className={styles.container}>
                <span className="text-xl">Exchange Now!</span>
                <div className="bg-c-secondary-900  w-full lg:p-5 p-3 rounded-lg my-10">
                    <ExchangeBox
                        userWallet={userWallet}
                        selectedCoin={fromCoin}
                        handleCoinChange={onChangeFromCoin}
                        valueData={fromValueData}
                        onValueChange={onFromValueChange}
                    />
                    <hr className="border-gray-600 my-2" />
                    <ExchangeBox
                        userWallet={userWallet}
                        selectedCoin={toCoin}
                        handleCoinChange={onChangeToCoin}
                        valueData={toValueData}
                        onValueChange={onToValueChange}
                    />

                    <ConversionRateBox
                        fromCoin={fromCoin}
                        toCoin={toCoin}
                        conversationRate={conversationRate}
                    />
                </div>

                <Button
                    onClick={handleExchange}
                    classBtn="p-2 w-full lg:w-28 mx-1 text-sm font-bold"
                    disabled={isLoading}
                    loading={isLoading}
                >
                    Exchange
                </Button>
            </div>
        </>
    );
};

export default ExchangePageView;
