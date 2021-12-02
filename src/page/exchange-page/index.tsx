import { ReactElement } from 'react';
import styles from './style.module.css';
import ExchangeBox from './exchange-box';
import Button from 'src/components/ui/button';

const ExchangePage = (): ReactElement => {
    return (
        <>
            <div className={styles.container}>
                <span className="text-xl">Exchange Now!</span>
                <div className="bg-c-secondary-900  w-full lg:p-5 p-3 rounded-lg my-10">
                    <ExchangeBox />
                    <hr className="border-gray-600 my-2" />
                    <ExchangeBox />

                    <div className="text-center mt-10 px-4 py-2 bg-lighten-5 w-auto mx-auto rounded-3xl">
                        {' '}
                        1$ = 1.852 EUR
                    </div>
                </div>

                <Button classBtn="p-2 w-full lg:w-28 mx-1 text-sm font-bold">Exchange</Button>
            </div>
        </>
    );
};

export default ExchangePage;
