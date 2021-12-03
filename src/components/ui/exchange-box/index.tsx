import { ChangeEvent, FC, ReactElement } from 'react';

import ComboBox from 'src/components/ui/combo-box';
import Input from 'src/components/ui/input';
import { InputValueData, Wallet } from 'src/interfaces';

interface ExchangeBoxProps {
    handleCoinChange: (coin: Wallet) => void;
    userWallet: Wallet[];
    selectedCoin: Wallet;
    valueData: InputValueData;
    onValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ExchangeBox: FC<ExchangeBoxProps> = (props): ReactElement => {
    const { handleCoinChange, userWallet, selectedCoin, valueData, onValueChange } = props;
    return (
        <div className="flex flex-col items-center justify-around  sm:flex-row  py-3">
            <div className="w-full mb-1 sm:w-40 sm:mb-0">
                <ComboBox
                    wrapperClassName=" mb-5"
                    title={''}
                    value={selectedCoin.title}
                    data={userWallet}
                    onSelectedItem={handleCoinChange}
                    isLoading={false}
                    renderItem={(item) => {
                        return (
                            <div className="w-full h-full p-2 flex justify-start w- hover:bg-c-secondary-900 transition-all duration-300">
                                {item.title}
                            </div>
                        );
                    }}
                />
                <span className="text-sm">
                    Balance: {selectedCoin?.sign} {selectedCoin?.balance.toFixed(2)}
                </span>
            </div>

            <div className="w-full sm:w-40 mb-3 sm:mb-14">
                <Input
                    value={valueData?.value}
                    onChange={onValueChange}
                    placeholder="value"
                    labelClassName="mb-1"
                    type="number"
                    error={valueData?.error}
                />
            </div>
        </div>
    );
};

export default ExchangeBox;
