import { ChangeEvent, memo, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import Button from 'src/components/ui/button';
import Modal from 'src/components/ui/modal';
import gate from 'src/gate';
import { access_key } from 'src/gate/api';
import { isEmpty } from 'src/helper';
import { userWallet } from 'src/helper/mock';
import { InputValueData, Wallet } from 'src/interfaces';
import { showError } from 'src/utils';
import ExchangePageView from './exchange-page.view';

// eslint-disable-next-line react/display-name
const ExchangePageController = memo(() => {
    const initialValueData = {
        value: '',
        error: null,
    } as InputValueData;

    const defaultConversionRate = 1.1877;

    const [wallet, setWallet] = useState<Wallet[]>(userWallet);
    const [fromCoin, setFromCoin] = useState<Wallet>(wallet[0]);
    const [toCoin, setToCoin] = useState<Wallet>(wallet[1]);
    const [fromValueData, setFromValueData] = useState<InputValueData>(initialValueData);
    const [toValueData, setToValueData] = useState<InputValueData>(initialValueData);
    const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
    const [conversionRate, setConversionRate] = useState<number>(defaultConversionRate);

    const { mutate: getRate, isLoading } = useMutation(gate.getConversionRate);

    /**
     * to fetch conversion rate
     * @function handleGetConversionRate
     * @returns { void }
     */
    const handleGetConversionRate = (): void => {
        const query = `latest?access_key=${access_key}&base=${fromCoin.id}&symbols=${toCoin.id}`;
        getRate(query, {
            onSuccess: (data: any) => {
                setConversionRate(Object.values(data.rates)[0] as number);
            },
            onError: (error: unknown) => {
                //FIXME: it's just for this demo
                // set default conversion rate value when
                // some error happens while fetching data
                // from our free endpoint provider
                // in this demo
                setConversionRate(defaultConversionRate);
                console.log('error happened while getting conversion rate data: ', error);
            },
        });
    };

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
        setFromValueData({
            value,
            error: null,
        });

        !isEmpty(value)
            ? setToValueData({
                  value: (+value * conversionRate).toFixed(2).toString(),
                  error: null,
              })
            : setToValueData(initialValueData);
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
        setToValueData({
            value,
            error: null,
        });
        !isEmpty(value)
            ? setFromValueData({
                  value: (+value / conversionRate).toFixed(2).toString(),
                  error: null,
              })
            : setFromValueData(initialValueData);
    };

    /**
     * @function handleExchange
     * @returns { void }
     */
    const handleExchange = (): void => {
        if (isEmpty(fromValueData.value) || isEmpty(toValueData.value)) {
            setFromValueData((prev: InputValueData) => ({
                ...prev,
                error: { message: 'enter a value' },
            }));
            return;
        }

        if (+fromValueData?.value > fromCoin?.balance) {
            showError({
                error: 'more than your balance',
                config: { color: 'red', gravity: 'top', position: 'center' },
            });
            return;
        }

        if (fromCoin.id === toCoin.id) {
            setToValueData((prev: InputValueData) => ({
                ...prev,
                error: { message: 'select a different coin' },
            }));
            return;
        }

        setShowConfirmModal(true);
    };

    /**
     * @function onCloseConfirmModal
     * @returns { void }
     */
    const onCloseConfirmModal = (): void => {
        setShowConfirmModal(false);
    };

    /**
     * to update current coins
     * @function updateCoins
     * @returns { void }
     */
    const updateCoins = (): void => {
        setFromCoin((prev) => ({ ...prev, balance: prev.balance - +fromValueData.value }));
        setToCoin((prev) => ({ ...prev, balance: prev.balance + +toValueData.value }));
    };

    /**
     * to update wallet
     * @function updateWallet
     * @returns { void }
     */
    const updateWallet = (): void => {
        setWallet((prev: Wallet[]) => {
            return prev.map((item: Wallet) =>
                item.id === fromCoin.id
                    ? { ...item, balance: item.balance - +fromValueData.value }
                    : item.id === toCoin.id
                    ? { ...item, balance: item.balance + +toValueData.value }
                    : item,
            );
        });
    };

    /**
     * @function handleConfirmExchange
     * @returns { void }
     */
    const handleConfirmExchange = (): void => {
        updateCoins();
        updateWallet();

        onCloseConfirmModal();
    };

    /**
     * to fetch new conversion rate
     */
    useEffect(() => {
        handleGetConversionRate();
    }, [fromCoin, toCoin]);

    return (
        <>
            <Modal onClose={onCloseConfirmModal} visible={showConfirmModal}>
                <div className="bg-white p-5 rounded-md text-gray-600">
                    <span className="text-md p-0">
                        you are going to exchange {fromCoin.sign} {fromValueData.value} to{' '}
                        {toCoin.sign} {toValueData.value}
                        <br />
                        you will receive {toCoin.sign} {toValueData.value}
                    </span>
                    <div className="flex mt-5">
                        <Button
                            onClick={handleConfirmExchange}
                            className="btn text-white m-1 bg-green-600"
                        >
                            Yes
                        </Button>
                        <Button
                            onClick={onCloseConfirmModal}
                            className="btn text-white m-1 bg-gray-500"
                        >
                            No
                        </Button>
                    </div>
                </div>
            </Modal>
            <ExchangePageView
                userWallet={wallet}
                onChangeFromCoin={onChangeFromCoin}
                onChangeToCoin={onChangeToCoin}
                fromCoin={fromCoin}
                toCoin={toCoin}
                fromValueData={fromValueData}
                toValueData={toValueData}
                onFromValueChange={onFromValueChange}
                onToValueChange={onToValueChange}
                handleExchange={handleExchange}
                conversionRate={conversionRate}
                isLoading={isLoading}
            />
        </>
    );
});

export default ExchangePageController;
