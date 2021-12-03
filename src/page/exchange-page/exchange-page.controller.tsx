import { ChangeEvent, memo, useState } from 'react';
import { isEmpty } from 'src/helper';
import { userWallet } from 'src/helper/mock';
import { Wallet } from 'src/interfaces';
import ExchangePageView from './exchange-page.view';

// eslint-disable-next-line react/display-name
const ExchangePageController = memo(() => {
    const initialFromCoin = userWallet[0];
    const initialToCoin = userWallet[1];

    const [fromCoin, setFromCoin] = useState<Wallet>(initialFromCoin);
    const [toCoin, setToCoin] = useState<Wallet>(initialToCoin);
    const [fromValue, setFromValue] = useState<string>('');
    const [toValue, setToValue] = useState<string>('');
    const [conversationRate, setConversationRate] = useState<number>(1.1877);

    /**
     * @function onChangeFromCoin
     * @param { Wallet } coin
     * @returns { void }
     */
    const onChangeFromCoin = (coin: Wallet): void => {
        setFromCoin(coin);
    };

    /**
     * @function onChangeToCoin
     * @param { Wallet } coin
     * @returns { void }
     */
    const onChangeToCoin = (coin: Wallet): void => {
        setToCoin(coin);
    };

    /**
     * @function onFromValueChange
     * @param { ChangeEvent<HTMLInputElement> } event
     * @returns { void }
     */
    const onFromValueChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const {
            target: { value },
        } = event;
        setFromValue(value);

        !isEmpty(value)
            ? setToValue((+value * conversationRate).toFixed(2).toString())
            : setToValue('');
    };

    /**
     * @function onToValueChange
     * @param { ChangeEvent<HTMLInputElement> } event
     * @returns { void }
     */
    const onToValueChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const {
            target: { value },
        } = event;
        setToValue(value);
        !isEmpty(value)
            ? setFromValue((+value / conversationRate).toFixed(2).toString())
            : setFromValue('');
    };

    return (
        <ExchangePageView
            onChangeFromCoin={onChangeFromCoin}
            onChangeToCoin={onChangeToCoin}
            fromCoin={fromCoin}
            toCoin={toCoin}
            fromValue={fromValue}
            toValue={toValue}
            onFromValueChange={onFromValueChange}
            onToValueChange={onToValueChange}
            conversationRate={conversationRate}
        />
    );
});

export default ExchangePageController;
