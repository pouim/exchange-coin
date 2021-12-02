import { ReactElement } from 'react';

import ComboBox from 'src/components/ui/combo-box';
import Input from 'src/components/ui/input';

const ExchangeBox = (): ReactElement => {
    return (
        <div className="flex flex-col items-center justify-around  sm:flex-row  py-3">
            <div className="w-full mb-1 sm:w-40 sm:mb-0">
                <ComboBox
                    wrapperClassName=" mb-5"
                    title={''}
                    // defaultValue={{}}
                    data={[]}
                    onSelectedItem={() => null}
                    isLoading={false}
                    renderItem={(item) => {
                        return (
                            <div className="w-full h-full p-2 flex justify-start w- hover:bg-c-secondary-900 transition-all duration-300">
                                {item}
                            </div>
                        );
                    }}
                />
                <span className="text-sm">Balance: </span>
            </div>

            <div className="w-full sm:w-40 mb-3 sm:mb-14">
                <Input
                    placeholder="value"
                    labelClassName="mb-1"
                    name="first_name"
                    type="text"
                    // register={register}
                />
            </div>
        </div>
    );
};

export default ExchangeBox;
