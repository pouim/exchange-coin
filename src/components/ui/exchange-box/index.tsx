import { ChangeEvent, FC, ReactElement } from 'react';

import ComboBox from 'src/components/ui/combo-box';
import Input from 'src/components/ui/input';
import { userWallet } from 'src/helper/mock';
import { Wallet } from 'src/interfaces';

interface ExchangeBoxProps {
    handleCoinChange: (coin: Wallet) => void;
    selectedCoin: Wallet;
    value: string;
    onValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ExchangeBox: FC<ExchangeBoxProps> = (props): ReactElement => {
    const { handleCoinChange, selectedCoin, value, onValueChange } = props;
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
                    Balance: {selectedCoin?.balance} {selectedCoin?.sign}{' '}
                </span>
            </div>

            <div className="w-full sm:w-40 mb-3 sm:mb-14">
                <Input
                    value={value}
                    onChange={onValueChange}
                    placeholder="value"
                    labelClassName="mb-1"
                    type="number"
                />
            </div>
        </div>
    );
};

export default ExchangeBox;
